import React from "react";

const Experience = () => {
    return (
        <section className="">
            <div className="">
                <div className="">
                    <img
                        src="/experince.png"
                        alt="Designer Portrait"
                        className=""
                    />
                    <div className=""></div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <h2 className="">
                        EXPERIENCE
                        <span style={{ fontFamily: "Mea Culpa" }} className="">
                            <span className="">G</span>raphic <span className="">D</span>esign
                        </span>
                    </h2>
                </div>
                <div className="">
                    <div className="">
                        <div className="">
                            <h3 className="">Liceria & Co.</h3>
                            <p className="">GRAPHIC DESIGNER</p>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                        <div className="">
                            <h3 className="">Showde</h3>
                            <p className="">GRAPHIC DESIGNER</p>
                            <p className="">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="">
                <img src="/wrap.png" alt="" />
            </div>
        </section>
    );
};

export default Experience;
