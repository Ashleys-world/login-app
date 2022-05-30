import React from 'react'

export default function Registration() {
  return (
    <div className="row">
        <div className="col-lg-8 offset-lg-2 col-md-8 offset-md-2 border border-2 border-success mt-3">
            <h4>Registration</h4>
            <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Confirm password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">Sign up for email notifications</label>
            </div>
            <button type="submit" className="btn btn-success mb-3">Submit</button>
        </div>
    </div>
  )
}
