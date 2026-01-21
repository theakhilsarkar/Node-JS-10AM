import React from "react";

export default function SignUp() {

    
  return (
    <div>
      <div className="container bg-light p-5 mt-5 rounded shadow" style={{ maxWidth: '600px' }}>
        <div className="">
          <h2 className="mb-3">Sign Up Page</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
