import { render } from '@testing-library/react';

import Card from "../components/Card";

test("render card component", () => {
    expect(render(<Card />)).toMatchSnapshot();
})