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

import URLSearchParams from 'url-search-params';

const urlParams = (newPath, router, preserveParams) => {
    if (preserveParams) {
        const query =
            typeof preserveParams === 'string'
                ? [preserveParams]
                : preserveParams;
        const params = new URLSearchParams(router.asPath.split('?')[1]);
        query.forEach(p => {
            if (router.query[p]) params.set(p, router.query[p]);
        });
        if (Array.from(params.keys()).length !== 0)
            return `${newPath}?${params.toString()}`;
    }
    return newPath;
};

export default urlParams;

export const queryParams = (router, preserveParams) => {
    if (preserveParams) {
        const result = {};
        const query =
            typeof preserveParams === 'string'
                ? [preserveParams]
                : preserveParams;
        const params = new URLSearchParams(router.asPath.split('?')[1]);
        // eslint-disable-next-line no-restricted-syntax
        for (const pair of params.entries())
            if (query.indexOf(pair[0]) !== -1) result[pair[0]] = pair[1];
        return result;
    }
    return router.asPath.split('?')[0];
};
