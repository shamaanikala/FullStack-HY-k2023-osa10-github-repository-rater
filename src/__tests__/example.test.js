import { Pressable, Text, TextInput, View } from "react-native";
import { fireEvent, render, screen } from "@testing-library/react-native";
import { useState } from "react";


//------------------------
// Own counter form test

const Counter = ({ onSubmit }) => {
  const [counter, setCounter] = useState(0);

  const handleSubmit = () => {
    onSubmit(setCounter(counter + 1));
  };

  return (
    <View>
      <Text>{counter}</Text>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>Increment</Text>
        </Pressable>
      </View>
    </View>
  );
};

describe('Counter', () => {
  it('is incremented by one when pressed once', () => {
    const onSubmit = jest.fn();
    render(<Counter onSubmit={onSubmit} />);

    fireEvent.press(screen.getByText('Increment'));

    expect(onSubmit).toHaveBeenCalledTimes(1);

    expect(screen.getByText('1')).toBeDefined();
    // expect(screen.getByTestId('counterValue')).toEqual(1);
  });
  it('is incremented by three when pressed thrice', () => {
    const onSubmit = jest.fn();
    render(<Counter onSubmit={onSubmit} />);

    fireEvent.press(screen.getByText('Increment'));
    fireEvent.press(screen.getByText('Increment'));
    fireEvent.press(screen.getByText('Increment'));

    expect(onSubmit).toHaveBeenCalledTimes(3);

    expect(screen.getByText('3')).toBeDefined();
  });
});

// -----------------------

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    onSubmit({ username, password });
  };

  return (
    <View>
      <View>
        <TextInput
          value={username}
          onChangeText={(text) => setUsername(text)}
          placeholder="Username"
        />
      </View>
      <View>
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
        />
      </View>
      <View>
        <Pressable onPress={handleSubmit}>
          <Text>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
};

describe('Form', () => {
  it('calls function provided by onSubmit prop after pressing the submit button', () => {
    const onSubmit = jest.fn();
    render(<Form onSubmit={onSubmit} />);

    // screen.debug();

    fireEvent.changeText(screen.getByPlaceholderText('Username'), 'kalle');
    fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
    fireEvent.press(screen.getByText('Submit'));

    expect(onSubmit).toHaveBeenCalledTimes(1);

    // onSubmit.mock.calls[0][0] contains the first argument of the first call
    expect(onSubmit.mock.calls[0][0]).toEqual({
      username: 'kalle',
      password: 'password',
    });
  });
});


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
