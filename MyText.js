import { Text } from "react-native";

export default function MyText(props) {
  return <Text style={{ color: props.color }}>{props.text}</Text>;
}
