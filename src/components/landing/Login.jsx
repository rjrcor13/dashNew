import React from 'react';
import logo from '../../dash.png';
const Login = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-base-200">
				<div className="hero-content flex-col lg:flex-row-reverse">
					<div className="text-center ">
						<div className="flex    flex-row items-center   justify-center lg:justify-start">
							<img src={logo} width={80} height={80} alt="logo" />
							<h1 className=" text-5xl font-bold ">DaSH</h1>
						</div>

						<p className="py-6">
							Gain Real-time Insights into Your Daily Sales Performance.
						</p>
					</div>
					<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
						<div className="card-body">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="text"
									placeholder="email"
									className="input input-bordered"
								/>
							</div>
							<div className="form-control">
								<label className="label">
									<span className="label-text">Password</span>
								</label>
								<input
									type="text"
									placeholder="password"
									className="input input-bordered"
								/>
								<label className="label">
									<a
										href="localhost"
										className="label-text-alt link link-hover"
									>
										Forgot password?
									</a>
								</label>
							</div>
							<div className="form-control mt-6">
								<button className="btn btn-primary">Login</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
