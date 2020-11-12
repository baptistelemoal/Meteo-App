import animationData from "../assets/animations/loading.json";
import Lottie from "react-lottie";
import React from "react";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

const LoadingAnimation = () => <Lottie options={defaultOptions} height={70} width={70} style={{ paddingTop: 40 }} />;

export default LoadingAnimation;
