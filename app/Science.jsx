import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const Science = () => {
    const router = useRoute();
    const { subject } = router.params;
    console.log(subject);
    
    const biologyChapters = [
      "Chapter 1: The Living World",
      "Chapter 2: Biological Classification",
      "Chapter 3: Plant Kingdom",
      "Chapter 4: Animal Kingdom",
      "Chapter 5: Morphology of Flowering Plants",
      "Chapter 6: Anatomy of Flowering Plants",
      "Chapter 7: Structural Organisation in Animals",
      "Unit 3: Cell - Structure and Functions",
      "Chapter 8: Cell: The Unit of Life",
      "Chapter 9: Biomolecules",
      "Chapter 10: Cell Cycle and Cell Division",
      "Chapter 11: Photosynthesis in Higher Plants",
      "Chapter 12: Respiration in Plants",
      "Chapter 13: Plant Growth and Development",
      "Chapter 14: Breathing and Exchange of Gases",
      "Chapter 15: Body Fluids and Circulation",
      "Chapter 16: Excretory Products and Their Elimination",
      "Chapter 17: Locomotion and Movement",
      "Chapter 18: Neural Control and Coordination",
      "Chapter 19: Chemical Coordination and Integration"
    ];

    
  return (
    <View>
      <Text>Science</Text>
    </View>
  )
}

export default Science