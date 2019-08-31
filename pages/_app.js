/*
 * This file is part of certish. Copyright © 2019 certish.
 *
 * certish is free software: you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * certish is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with certish. If not, see <https://www.gnu.org/licenses/>.
 */

import React from 'react';
import { func, shape } from 'prop-types';
import NextApp from 'next/app';
import { Helmet } from 'react-helmet';
import { Box, Grommet, Text } from 'grommet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles/metropolis.css';
import '../components/styles/full-height.css';

const title = 'certish';
const hostname = 'https://certi.sh';
const description = 'The public key infrastructure for the public';
const brandColor = '#f00';
const textSelectionStyle = `background:${brandColor};color:#FFF;`;
const theme = {
    global: {
        colors: {
            brand: brandColor,
            focus: '#f55'
        },
        font: {
            family:
                'Metropolis, "Avenir Next", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
            size: '16px',
            height: '20px'
        }
    }
};

class App extends NextApp {
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Grommet theme={theme} className="full-height">
                <Helmet
                    defaultTitle={title}
                    titleTemplate={`%s » ${title}`}
                    htmlAttributes={{ lang: 'en' }}
                >
                    <meta charSet="utf-8" />
                    <meta name="application-name" content={title} />
                    <meta name="description" content={description} />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1"
                    />
                    <meta name="apple-mobile-web-app-title" content={title} />
                    <meta name="theme-color" content={brandColor} />
                    <meta name="msapplication-TileColor" content={brandColor} />
                    <meta
                        name="msapplication-TileImage"
                        content="/static/icons/mstile-144x144.png"
                    />
                    {/* Open Graph */}
                    <meta property="og:type" content="website" />
                    <meta property="og:title" content={title} />
                    <meta property="og:description" content={description} />
                    <meta property="og:url" content={hostname} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta
                        property="og:image"
                        content={`${hostname}/static/open-graph.png`}
                    />
                    {[16, 32].map(size => {
                        const dimensions = `${size}x${size}`;
                        return (
                            <link
                                key={size}
                                rel="icon"
                                type="image/png"
                                sizes={dimensions}
                                href={`/static/icons/favicon-${dimensions}.png`}
                            />
                        );
                    })}
                    <link
                        rel="apple-touch-icon"
                        sizes="300x300"
                        href="/static/icons/apple-touch-icon.png"
                    />
                    <link
                        rel="mask-icon"
                        href="/static/icons/safari-pinned-tab.svg"
                        color={brandColor}
                    />
                    {/* PWA web manifest */}
                    <link rel="manifest" href="/static/site.webmanifest" />
                    {/* Text selection style */}
                    <style>
                        {`body,html{margin:0;padding:0;}::selection{${textSelectionStyle}}::-moz-selection{${textSelectionStyle}}`}
                    </style>
                </Helmet>
                <Box
                    as="noscript"
                    fill
                    background="brand"
                    alignContent="center"
                    pad="small"
                >
                    <Text textAlign="center" weight="bold">
                        Please enable JavaScript to use certish.
                    </Text>
                </Box>
                <Box fill flex className="expand-height">
                    <Header />
                    <Box
                        fill
                        pad={{
                            bottom: 'large'
                        }}
                        className="expand-height"
                        role="main"
                    >
                        <Component {...pageProps} />
                    </Box>
                    <Footer />
                </Box>
            </Grommet>
        );
    }
}

App.propTypes = {
    Component: func.isRequired,
    pageProps: shape({}).isRequired
};

export default App;
