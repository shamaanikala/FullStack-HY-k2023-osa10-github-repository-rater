import { View } from "react-native"
import Text from "../Text"
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  const onSubmit = async (values) => {
    console.log(values);
  };

  return (
    <View>
      <Text>Creating a new user:</Text>
      <SignUpForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignUp;
