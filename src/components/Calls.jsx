import React, { useEffect, useState } from 'react';
import Header from './global/Header';

const Calls = () => {
	const [selectedImage, setSelectedImage] = useState(null);
	const [previewImage, setPreviewImage] = useState(null);
	const [showToast, setShowToast] = useState(false); // State to control toast visibility

	const handleImageChange = (event) => {
		const selectedFile = event.target.files[0];
		if (selectedFile && selectedFile.type.includes('image')) {
			setSelectedImage(selectedFile);
			setPreviewImage(URL.createObjectURL(selectedFile));
		} else {
			setSelectedImage(null);
			setPreviewImage(null);
		}
	};
	const isUploadDisabled = !selectedImage; // Check if selectedImage is null
	const handleUpload = () => {
		// Handle the upload logic here
		// Once upload is successful, show the toast
		setShowToast(true);
	};

	useEffect(() => {
		if (showToast) {
			const timer = setTimeout(() => {
				setShowToast(false);
			}, 7000);

			return () => {
				clearTimeout(timer);
				// Apply slide out class when hiding the toast
				setShowToast(false);
			};
		}
	}, [showToast]);
	return (
		<div>
			<Header title="Calls" subtitle="Target calls per personnel" />
			<div className="flex  flex-wrap ">
				<div className="w-full sm:w-1 md:w-1/2 lg:w-1/2 xl:w-1/2 ">
					<div className="form-control w-full max-w-xl my-5">
						<label className="label">
							<span className="label-text">Select Customer</span>
						</label>
						<select
							className="select select-bordered sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 "
							defaultValue="1"
						>
							<option disabled value="1">
								Pick One
							</option>
							<option>Star Wars</option>
							<option>Harry Potter</option>
							<option>Lord of the Rings</option>
							<option>Planet of the Apes</option>
							<option>Star Trek</option>
						</select>
					</div>
					<div className="form-control w-full max-w-xl">
						<label className="label">
							<span className="label-text">Select an Image</span>
						</label>
						<input
							type="file"
							accept="image/*"
							className="file-input file-input-bordered sm:w-full md:w-3/4 lg:w-3/4 xl:w-3/4 max-w-xl"
							onChange={handleImageChange}
						/>
					</div>
					{selectedImage && (
						<div className="mt-4 aspect-auto">
							<label className="label">
								<span className="label-text">Image Preview</span>
							</label>
							<img
								src={previewImage}
								alt="Preview"
								className="max-w-xs max-h-42 aspect-auto"
							/>
						</div>
					)}
					<div className="my-5  max-w-xl w-full">
						<button
							className="btn btn-md btn-primary w-full md:w-3/4 lg:w-3/4 xl:w-3/4"
							disabled={isUploadDisabled}
							onClick={handleUpload} // Call the handleUpload function
						>
							Upload
						</button>
					</div>
				</div>

				<div className="w-full sm:w-1 md:w-1/2 lg:w-1/2 xl:w-1/2">
					<Header title="Status" subtitle="Target VS Actual" />
					<div>
						<div className="stats stats-vertical lg:stats-horizontal shadow w-full ">
							<div className="stat">
								<div className="stat-figure text-primary w-full ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block h-8 stroke-current"
									>
										<path
											d="M19 1C19 0.447715 19.4477 0 20 0C20.5523 0 21 0.447715 21 1V1.58582L22.2709 0.314894C22.6614 -0.0756305 23.2946 -0.0756294 23.6851 0.314895C24.0757 0.705419 24.0757 1.33858 23.6851 1.72911L22.4142 3H23C23.5523 3 24 3.44772 24 4C24 4.55228 23.5523 5 23 5H20.4142L12.7017 12.7125C12.3112 13.103 11.678 13.103 11.2875 12.7125C10.897 12.322 10.897 11.6888 11.2875 11.2983L19 3.58582V1Z"
											fill="#0F0F0F"
										></path>
										<path
											d="M17.3924 3.78908C17.834 3.3475 17.7677 2.61075 17.2182 2.31408C15.6655 1.47581 13.8883 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 10.1154 22.5261 8.34153 21.6909 6.79102C21.3946 6.24091 20.6574 6.17424 20.2155 6.61606L20.1856 6.64598C19.8554 6.97615 19.8032 7.48834 20.016 7.90397C20.6451 9.1326 21 10.5249 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C13.4782 3 14.8732 3.35638 16.1037 3.98791C16.5195 4.20129 17.0322 4.14929 17.3627 3.81884L17.3924 3.78908Z"
											fill="#0F0F0F"
										></path>
										<path
											d="M14.3899 6.79159C14.8625 6.31902 14.7436 5.52327 14.1062 5.32241C13.4415 5.11295 12.7339 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 11.2702 18.8883 10.5664 18.6811 9.9049C18.4811 9.26659 17.6846 9.14697 17.2117 9.61995L17.1194 9.71224C16.8382 9.99337 16.7595 10.4124 16.8547 10.7984C16.9496 11.1833 17 11.5858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C12.4172 7 12.8225 7.0511 13.21 7.1474C13.5965 7.24347 14.0166 7.16496 14.2982 6.88331L14.3899 6.79159Z"
											fill="#0F0F0F"
										></path>
										<path
											d="M11.078 9.15136C11.4874 9.01484 11.6934 9.48809 11.3882 9.79329L10.5827 10.5989C9.80254 11.379 9.80254 12.6438 10.5827 13.4239C11.3628 14.204 12.6276 14.204 13.4077 13.4239L14.2031 12.6285C14.5089 12.3227 14.9822 12.5301 14.8429 12.9397C14.441 14.1209 13.3135 15 12 15C10.3431 15 9 13.6569 9 12C9 10.6796 9.88827 9.54802 11.078 9.15136Z"
											fill="#0F0F0F"
										></path>
									</svg>
								</div>
								<div className="stat-title">Target</div>
								<div className="stat-value text-primary">312</div>
								<div className="stat-desc">For the Month of May</div>
							</div>

							<div className="stat">
								<div className="stat-figure text-secondary">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										className="inline-block w-8 h-8 stroke-current"
									>
										<path
											d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM7.63 18.15C7.63 18.56 7.29 18.9 6.88 18.9C6.47 18.9 6.13 18.56 6.13 18.15V16.08C6.13 15.67 6.47 15.33 6.88 15.33C7.29 15.33 7.63 15.67 7.63 16.08V18.15ZM12.75 18.15C12.75 18.56 12.41 18.9 12 18.9C11.59 18.9 11.25 18.56 11.25 18.15V14C11.25 13.59 11.59 13.25 12 13.25C12.41 13.25 12.75 13.59 12.75 14V18.15ZM17.87 18.15C17.87 18.56 17.53 18.9 17.12 18.9C16.71 18.9 16.37 18.56 16.37 18.15V11.93C16.37 11.52 16.71 11.18 17.12 11.18C17.53 11.18 17.87 11.52 17.87 11.93V18.15ZM17.87 8.77C17.87 9.18 17.53 9.52 17.12 9.52C16.71 9.52 16.37 9.18 16.37 8.77V7.8C13.82 10.42 10.63 12.27 7.06 13.16C7 13.18 6.94 13.18 6.88 13.18C6.54 13.18 6.24 12.95 6.15 12.61C6.05 12.21 6.29 11.8 6.7 11.7C10.07 10.86 13.07 9.09 15.45 6.59H14.2C13.79 6.59 13.45 6.25 13.45 5.84C13.45 5.43 13.79 5.09 14.2 5.09H17.13C17.17 5.09 17.2 5.11 17.24 5.11C17.29 5.12 17.34 5.12 17.39 5.14C17.44 5.16 17.48 5.19 17.53 5.22C17.56 5.24 17.59 5.25 17.62 5.27C17.63 5.28 17.63 5.29 17.64 5.29C17.68 5.33 17.71 5.37 17.74 5.41C17.77 5.45 17.8 5.48 17.81 5.52C17.83 5.56 17.83 5.6 17.84 5.65C17.85 5.7 17.87 5.75 17.87 5.81C17.87 5.82 17.88 5.83 17.88 5.84V8.77H17.87Z"
											fill="#292D32"
										></path>
									</svg>
								</div>
								<div className="stat-title">Actual</div>
								<div className="stat-value text-secondary">56</div>
								<div className="stat-desc">For the Month of May</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{showToast && (
				// <div className="toast toast-end">
				// 	<div className="alert alert-error">
				// 		<span>Image uploaded successfully.</span>
				// 	</div>
				// </div>

				<div
					className={`toast toast-end ${
						showToast ? 'toast-slide-in' : 'toast-slide-out'
					}`}
				>
					<div className="alert alert-success">
						<span>Image uploaded successfully.</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Calls;
