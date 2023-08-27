const BORDER_RADIUS = require('./src/utils/constants/tailwind/twBorderStyle.constant');
const COLORS = require('./src/utils/constants/tailwind/twColors.constant');
const { FONT_SIZE, LINE_HEIGHT, LETTER_SPACING } = require('./src/utils/constants/tailwind/twFontStyle.constant');
const { BOX_SHADOW, DROP_SHADOW } = require('./src/utils/constants/tailwind/twShadow.constant');
const {
    WIDTH,
    HEIGHT,
    MAX_WIDTH,
    MAX_HEIGHT,
    MIN_HEIGHT,
    MIN_WIDTH,
} = require('./src/utils/constants/tailwind/twSizing.constant');
const SPACING = require('./src/utils/constants/tailwind/twSpacing.constant');

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                ...COLORS,
            },
            fontFamily: {
                mono: ['var(--font-roboto)'],
            },
            fontSize: {
                ...FONT_SIZE,
            },
            lineHeight: {
                ...LINE_HEIGHT,
                131: '131px',
            },
            letterSpacing: { ...LETTER_SPACING },
            spacing: {
                // By default the spacing scale is inherited by the padding, margin, gap, inset, space, translate, scrollMargin, and scrollPadding core plugins.
                ...SPACING,
            },
            width: {
                ...WIDTH,
            },
            height: {
                ...HEIGHT,
            },
            maxWidth: {
                ...MAX_WIDTH,
            },
            minWidth: {
                ...MIN_WIDTH,
            },
            minHeight: {
                ...MIN_HEIGHT,
            },
            maxHeight: {
                ...MAX_HEIGHT,
            },
            dropShadow: {
                ...DROP_SHADOW,
            },
            boxShadow: {
                ...BOX_SHADOW,
            },
            borderRadius: {
                ...BORDER_RADIUS,
            },
        },
    },
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    plugins: [require('tailwind-scrollbar-hide')],
};
