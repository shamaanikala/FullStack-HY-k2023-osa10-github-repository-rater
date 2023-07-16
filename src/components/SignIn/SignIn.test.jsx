import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { FormikSignInForm, initialValues, validationSchema } from ".";

describe('SignIn', () => {
  describe('FormikSignInForm', () => {
    const onSubmit = jest.fn();
    // disable useNativeDriver warning
    // https://stackoverflow.com/questions/59587799/how-to-resolve-animated-usenativedriver-is-not-supported-because-the-native
    jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

    beforeEach(() => {
      // render the SignInContainer/Form component, 
      render(
        <FormikSignInForm
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      );
    });
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // fill the text inputs and press the submit button
      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'elina');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign in'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'elina',
          password: 'password',
        });
      });
    });
  });
});
