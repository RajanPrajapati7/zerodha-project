import React, { useState } from "react";

function Signup() {
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (mobile.length !== 10) {
      alert("Please enter a valid 10-digit mobile number");
      return;
    }

    alert("OTP will be sent to your mobile number");
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">

          {/* Heading */}
          <div className="text-center mb-4">
            <h1 className="fs-2 mb-2">Signup</h1>
            <p className="text-muted">
              Open a free account with Zerodha
            </p>
          </div>

          {/* Signup Card */}
          <div className="card border-0 shadow-sm p-4">
            <h4 className="mb-3">Create your account</h4>

            <form onSubmit={handleSubmit}>

              {/* Mobile Number */}
              <div className="mb-3">
                <label className="form-label">
                  Mobile number
                </label>

                <div className="input-group">
                  <span className="input-group-text">
                    +91
                  </span>

                  <input
                    type="tel"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, ""))
                    }
                    maxLength="10"
                    required
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 py-2"
              >
                Continue
              </button>
            </form>

            {/* Login */}
            <div className="text-center mt-4">
              <p className="text-muted mb-0">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">
                  Login
                </a>
              </p>
            </div>
          </div>

          {/* Information */}
          <p className="text-center text-muted small mt-4">
            By continuing, you agree to our Terms & Conditions
            and Privacy Policy.
          </p>

        </div>
      </div>
    </div>
  );
}

export default Signup;