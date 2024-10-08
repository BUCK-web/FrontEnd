import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Pdf from "../components/PDF/Pdf";
import Quizes from "../components/Quizes/Quizes";
import Notes from "../components/Notes/Notes";
import Clases from "../components/Clases/Clases";

const Details = () => {
  const [Class , setClass ] = useState("");
  const route = useRoute();
  const { item, type } = route.params;
    return (
        <View style={{ flex: 1 }}>
            <Clases setClass={setClass} Class={Class} item={item} type={type} />
        </View>
    );
};

export default Details;