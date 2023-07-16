import { render, screen, fireEvent, waitFor } from "@testing-library/react-native";
import { FormikSignInForm, initialValues, validationSchema } from ".";

describe('SignIn', () => {
  describe('SignInForm', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer/Form component, fill the text inputs and press the submit button
      const onSubmit = jest.fn();

      render(
        <FormikSignInForm
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={validationSchema}
        />
      );

      fireEvent.changeText(screen.getByPlaceholderText('Username'), 'elina');
      fireEvent.changeText(screen.getByPlaceholderText('Password'), 'password');
      fireEvent.press(screen.getByText('Sign in'));

      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(onSubmit).toHaveBeenCalledTimes(1);
      });
    });
  });
});
