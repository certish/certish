/*
 * Certish
 * Copyright © 2019 Certish
 *
 * Certish is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Certish is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Certish. If not, see <https://www.gnu.org/licenses/>.
 */

/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Page from '../../pages/_error';

describe('<Error /> with 500 error', () => {
    it('matches snapshot', () => {
        const page = renderer.create(<Page statusCode={500} />);
        const tree = page.toJSON();
        expect(tree).toMatchSnapshot();
    });
});

describe('<Error /> with unknown error', () => {
    it('matches snapshot', () => {
        const page = renderer.create(<Page />);
        const tree = page.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
