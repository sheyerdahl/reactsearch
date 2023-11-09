import { render, fireEvent, screen } from '@testing-library/react';

import CounterButton from "../components/CounterButton";

test("counter button changes on click", () => {
    render(<CounterButton color={"red"}/>);

    const count = screen.getByText("Count", {exact: false})
    fireEvent.click(count)

    expect(count.textContent).toBe("Count: 1")
})