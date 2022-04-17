import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from '../../images/ServingCategories/images'

const ServingCategories = () => {
  return (
    <div>
      <motion.h1 animate={{ x: 500 }}>Serving Categories</motion.h1>
      <motion.div className="carousel">
        <motion.div className="inner-carousel">

        </motion.div>
      </motion.div>
    </div>
  );
};

export default ServingCategories;
