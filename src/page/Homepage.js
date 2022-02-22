import React from "react";
import CommingSoon from "../component/CommingSoon";
import Header from "../component/Header";
import InputText from "../component/InputText";
import "../page/Homepage.css";
import Footer from "../component/footer/Footer"
export default function Homepage() {
	return (
		<div>
			<Header />
			<div class="container text-white">
				<div class="row gx-lg-5">
					<div class="col-lg-6">
						<div className="timer">
							<div
								className="timer-heading"
								style={{
									marginTop: "20%",
									display: "flex",
									marginBottom: "5%",
								}}
							>
								<h4 className="mt-5">COMMING SOON</h4>
							</div>
							<div className="timer-component">
								<CommingSoon />
							</div>
						</div>
						<div
							className="Heading"
							style={{ marginTop: "10%", display: "flex" }}
						>
							<h6
								className="mt-3"
								style={{ justifyContent: "start", display: "flex" }}
							>
								Get notified when we launch
							</h6>
						</div>
						<div className="input-field">
							<div>
								<InputText />
							</div>
							<div>
								<button type="button" class="btn btn-secondary">
									Notifyme
								</button>
							</div>
						</div>
					</div>
					<div class="col-lg-6">
						<div className="right-heading text-start">
                            <ul>
                                <li>Studio Memser is creative studio for the passionately curious .</li>
                                <li>Want to talk ?<br></br><button type="button" class="btn btn-outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Contact Us</button>
                     
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel"> <ul>
    <li>Say hello</li>
    </ul></h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
                                        <div class="offcanvas-body">
                                        <form>
                                        <div class="form-group"> 
                                     
                                        <label for="exampleInputEmail1">Name</label>
                                        <input type="text" class="form-control" placeholder="Your name" aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>
                                                <div class="form-group"> 
                                     
                                                <label for="exampleInputEmail1">Email</label>
                                                <input type="text" class="form-control" placeholder="Your email id" aria-label="Username" aria-describedby="basic-addon1"/>
                                                </div>
                                                <div class="form-group"> 
                                     
                                                <label for="exampleInputEmail1">Message</label>
                                                <input type="text" class="form-control" placeholder="Start typing here" aria-label="Username" aria-describedby="basic-addon1"/>
                                              </div>
                                      
                                        </form>
                                           
   
  </div>
</div>
                                </li>
                                <li>Want to talk with us ? 
                                </li>
                            </ul>
						</div>
					
					</div>
				</div>
            </div>
          <Footer class="footer-main"/>
		</div>
	);
}
