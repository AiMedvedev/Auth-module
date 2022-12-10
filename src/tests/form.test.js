import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form, { submitHandler } from '../components/ToDo/Form';


describe('Form input check', () => {
	test('input field is rendering correctly', () => {
		render(Form);
	
		const input = screen.queryByTestId("todo-input");
		waitFor(() => expect(input).toBeInTheDocument());
	});
	
	test('should not submit when pressing enter on empty string in input', () => {
		
		render(Form);
		const input = screen.queryByTestId("todo-input");	
		userEvent.type(input, 'dfsdf');
		userEvent.type(input, '{enter}');
		waitFor(() => expect(submitHandler).not.toHaveBeenCalled());
	});

	test("should submit when pressing enter with input filled in", () => {
		render(Form);
		const input = screen.queryByTestId("todo-input");

		userEvent.type(input, { target: { value: "abc" } });
		userEvent.type(input, { key: "Enter", code: 13, charCode: 13 });

		waitFor(() => expect(submitHandler).toHaveBeenCalled());
	});
});	