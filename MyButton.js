import { Button } from "react-native";

export default function MyButton() {
  const handlePress = () => {
    alert("Button Pressed!");
  };

  return (
    <Button
      title="Press Me"
      style={{ backgroundColor: "red", color: "white" }}
      onPress={handlePress}
    />
  );
}
