import React from "react";
import logo from "../../assets/logo.png";
import Img from "../utils/Img";

const aboutSection = () => (
  <>
    <Img alt="SPNE Logo" src={logo} />
    <h2>About Us</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed
      condimentum dui. Praesent luctus vitae lorem vel convallis. Etiam at
      pulvinar risus. Etiam fermentum erat id pellentesque pulvinar. Mauris sed
      blandit sapien, id sagittis justo. Cras vel euismod nisi. Donec vestibulum
      odio quis orci luctus, eu mattis nibh sollicitudin.
    </p>
    <p>
      Aenean euismod placerat elit in auctor. Fusce eget lobortis ante, quis
      rhoncus sapien. Mauris pellentesque malesuada purus, vitae rutrum elit.
      Mauris arcu mauris, egestas sed mi at, volutpat sollicitudin eros. Donec
      nec lacus augue. Cras vel elit cursus, gravida libero sed, blandit turpis.
      Mauris non lacus massa. Nunc vulputate pulvinar sollicitudin. Mauris vitae
      justo congue, mattis massa ac, faucibus ligula. Etiam vitae turpis
      maximus, ultrices neque eget, feugiat nulla.
    </p>
  </>
);

export default aboutSection;
