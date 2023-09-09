import React, { useEffect, useState } from 'react';
import {
	barangays,
	cities,
	provinces,
	regions,
} from 'select-philippines-address';
import Header from './global/Header';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
	storeName: yup.string().required('Store Name is required'),
	ownerName: yup.string().required('Owner Name is required'),
	contactNumber: yup
		.string()
		.matches(/^\d+$/, 'Contact Number must be a valid number')
		.required('Contact Number is required'),
	// Define validation rules for other fields here
});

function OpenAccount() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema), // Use Yup as the validation resolver
	});

	const onSubmit = (data) => {
		// Handle form submission with validated data
		console.log(data);
	};

	const handleUpload = (event) => {
		event.preventDefault(); // Prevent form submission

		// const selectedCustomer = document.getElementById('customer').value;
		// const selectedProduct = document.getElementById('product').value;
		// const quantity = document.getElementById('quantity').value;

		// if (!quantity || parseInt(quantity) === 0) {
		// 	setShowToast(true);
		// 	return; // Don't proceed if validation fails
		// }
	};
	const [regionData, setRegion] = useState([]);
	const [provinceData, setProvince] = useState([]);
	const [cityData, setCity] = useState([]);
	const [barangayData, setBarangay] = useState([]);

	const [regionAddr, setRegionAddr] = useState('');
	const [provinceAddr, setProvinceAddr] = useState('');
	const [cityAddr, setCityAddr] = useState('');
	const [barangayAddr, setBarangayAddr] = useState('');

	const region = () => {
		regions().then((response) => {
			setRegion(response);
		});
	};

	const province = (e) => {
		setRegionAddr(e.target.selectedOptions[0].text);
		provinces(e.target.value).then((response) => {
			setProvince(response);
			setCity([]);
			setBarangay([]);
		});
	};

	const city = (e) => {
		setProvinceAddr(e.target.selectedOptions[0].text);
		cities(e.target.value).then((response) => {
			setCity(response);
		});
	};

	const barangay = (e) => {
		setCityAddr(e.target.selectedOptions[0].text);
		barangays(e.target.value).then((response) => {
			setBarangay(response);
		});
	};

	const brgy = (e) => {
		setBarangayAddr(e.target.selectedOptions[0].text);
	};

	useEffect(() => {
		region();
	}, []);

	return (
		<form
			name="openAccountForm"
			onSubmit={handleSubmit(onSubmit)}
			className="w-full "
		>
			<div>
				<Header title="Open Account" subtitle="Open an Account / Store" />
				<label className="label">
					<span className="label-text font-bold text-yellow-300">
						Basic Information
					</span>
				</label>

				<div className=" flex  flex-wrap  my-5 gap-5  text-sm">
					<div className="form-control md:w-1/4 w-full">
						<label className="label">
							<span className="label-text">Owners Name</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full  text-sm"
							name="ownerName"
							id="ownerName"
							{...register('ownerName')}
						/>
						<p>{errors.ownerName?.message}</p>
					</div>

					<div className="form-control md:w-1/4 w-full">
						<label className="label">
							<span className="label-text">Store Name</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered w-full text-sm"
							id="storeName"
							{...register('storeName')}
						/>
						<p>
							{errors.storeName && (
								<span className="error-message">
									{errors.storeName.message}
								</span>
							)}
						</p>
					</div>
					<div className="form-control md:w-1/4 w-full">
						<label className="label">
							<span className="label-text">Channel</span>
						</label>
						<select className="select select-bordered w-full text-sm">
							<option value="Farm">Farm</option>
							<option value="Store">Store</option>
						</select>
						<p>
							{errors.storeName && (
								<span className="error-message">
									{errors.storeName.message}
								</span>
							)}
						</p>
					</div>
				</div>

				<div className=" flex  flex-wrap  my-5 gap-5 ">
					<div className="form-control  md:w-1/4  w-full">
						<label className="label">
							<span className="label-text">Contact Number</span>
						</label>
						<input
							type="number"
							placeholder="Type here"
							className="input input-bordered sm:w-full   text-sm"
							name="contactNumber"
							id="contactNumber"
							{...register('contactNumber')}
						/>
						<p>{errors.contactNumber?.message}</p>
					</div>
					<div className="form-control md:w-1/4  w-full ">
						<label className="label">
							<span className="label-text">Pot Volume</span>
						</label>
						<input
							type="text"
							placeholder="Type here"
							className="input input-bordered sm:w-full  text-sm"
						/>
					</div>
					<div className="form-control md:w-1/4  w-full">
						<label className="label">
							<span className="label-text">Type</span>
						</label>
						<select className="select select-bordered sm:w-full  text-sm">
							<option value="Direct">Direct</option>
							<option value="Sub Dealer">Sub Dealer</option>
						</select>
					</div>
				</div>
				<label className="label mt-9 ">
					<span className="label-text font-bold text-yellow-300 md">
						Address
					</span>
				</label>
				<div className=" flex  flex-wrap  my-5 gap-5 ">
					<div className="form-control md:w-1/4  w-full">
						<label className="label">
							<span className="label-text">Region</span>
						</label>
						<select
							onChange={province}
							onSelect={region}
							className="select select-bordered sm:w-full  text-sm"
						>
							<option disabled>Select Region</option>
							{regionData &&
								regionData.length > 0 &&
								regionData.map((item) => (
									<option key={item.region_code} value={item.region_code}>
										{item.region_name}
									</option>
								))}
						</select>
					</div>
					<div className="form-control md:w-1/4  w-full">
						<label className="label">
							<span className="label-text">Province</span>
						</label>
						<select
							onChange={city}
							className="select select-bordered sm:w-full  text-sm"
						>
							<option disabled>Select Province</option>
							{provinceData &&
								provinceData.length > 0 &&
								provinceData.map((item) => (
									<option key={item.province_code} value={item.province_code}>
										{item.province_name}
									</option>
								))}
						</select>
					</div>
					<div className="form-control md:w-1/4  w-full  text-sm">
						<label className="label">
							<span className="label-text">City / Municipality</span>
						</label>
						<select
							onChange={barangay}
							className="select select-bordered sm:w-full"
						>
							<option disabled>Select City</option>
							{cityData &&
								cityData.length > 0 &&
								cityData.map((item) => (
									<option key={item.city_code} value={item.city_code}>
										{item.city_name}
									</option>
								))}
						</select>
					</div>
					<div className="form-control md:w-1/4  w-full">
						<label className="label">
							<span className="label-text">Barangay</span>
						</label>
						<select
							onChange={brgy}
							className="select select-bordered sm:w-full  text-sm"
						>
							<option disabled>Select Barangay</option>
							{barangayData &&
								barangayData.length > 0 &&
								barangayData.map((item) => (
									<option key={item.brgy_code} value={item.brgy_code}>
										{item.brgy_name}
									</option>
								))}
						</select>
					</div>
					<div className="form-control md:w-1/4  w-full">
						<label className="label">
							<span className="label-text">Street / Land Mark</span>
						</label>
						<input type="text" className="input input-bordered w-full " />
					</div>

					<div className="form-control  w-full">
						<label className="label">
							<span className="label-text">Complete Address</span>
						</label>
						<span className="border border-1 rounded-md p-1 text-sm border-slate-500 h-12 text-wrap w-full">
							{regionAddr && <span> {regionAddr},</span>}
							{provinceAddr && <span> {provinceAddr},</span>}
							{cityAddr && <span> {cityAddr},</span>}
							{barangayAddr && <span> {barangayAddr}</span>}
						</span>
					</div>
				</div>

				<div className="button">
					<button className="btn btn-md btn-primary w-full md:w-1/4 lg:w-1/4 xl:w-1/4">
						Submit
					</button>
				</div>
			</div>
			<div></div>
		</form>
	);
}

export default OpenAccount;
