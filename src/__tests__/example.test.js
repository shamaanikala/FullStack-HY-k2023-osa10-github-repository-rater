import { Text, View } from "react-native";
import { render, screen } from "@testing-library/react-native";

const Greeting = ({ name }) => {
  return (
    <View>
      <Text>Hello {name}!</Text>
    </View>
  );
};

describe('Greeting', () => {
  it('renders a greetings message based on the name prop', () => {
    render(<Greeting name="Kalle" />);

    screen.debug();

    expect(screen.getByText('Hello Kalle!')).toBeDefined();
  });
});

describe('Example', () => {
  it('works', () => {
    expect(1).toBe(1);
  });
});
