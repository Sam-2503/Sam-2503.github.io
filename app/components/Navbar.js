export default function Navbar() {
  return (
    <>
      <div className="global_css">
            <div className="global_code_base w-embed">
                <style dangerouslySetInnerHTML={{ __html: `
                    :root {
                        --breakout-start: [full-start] minmax(0, 1fr) [content-start];
                        --breakout-end: [content-end] minmax(0, 1fr) [full-end];
                        --grid-breakout-single: var(--breakout-start) minmax(0, var(--container--main)) var(--breakout-end);
                        --grid-breakout: var(--breakout-start) repeat(var(--site--column-count), minmax(0, var(--column-width--1))) var(--breakout-end);
                        --grid-main: repeat(var(--site--column-count), minmax(0, 1fr));
                        --grid-1: repeat(1, minmax(0, 1fr));
                        --grid-2: repeat(2, minmax(0, 1fr));
                        --grid-3: repeat(3, minmax(0, 1fr));
                        --grid-4: repeat(4, minmax(0, 1fr));
                        --grid-5: repeat(5, minmax(0, 1fr));
                        --grid-6: repeat(6, minmax(0, 1fr));
                        --grid-7: repeat(7, minmax(0, 1fr));
                        --grid-8: repeat(8, minmax(0, 1fr));
                        --grid-9: repeat(9, minmax(0, 1fr));
                        --grid-10: repeat(10, minmax(0, 1fr));
                        --grid-11: repeat(11, minmax(0, 1fr));
                        --grid-12: repeat(12, minmax(0, 1fr));
                        --grid-14: repeat(14, minmax(0, 1fr));
                        --grid-16: repeat(16, minmax(0, 1fr));
                        --_typography---text-transform--none: none;
                        --_typography---text-transform--uppercase: uppercase;
                        --_typography---text-transform--captialize: capitalize;
                        --_typography---text-transform--lowercase: lowercase;
                    }

                    * {
                        vertical-align: bottom;
                    }

                    ::before,
                    ::after {
                        box-sizing: border-box;
                    }

                    button {
                        background-color: unset;
                        padding: unset;
                        text-align: inherit;
                    }

                    button:not(:disabled) {
                        cursor: pointer;
                    }

                    video {
                        width: 100%;
                        object-fit: cover;
                    }

                    video.wf-empty {
                        padding: 0;
                    }

                    svg {
                        max-width: 100%;
                    }

                    section,
                    header,
                    footer {
                        position: relative;
                    }

                    @media (prefers-color-scheme: light) {
                        option {
                            color: black;
                        }
                    }

                    img::selection {
                        background: transparent;
                    }

                    /* Typography */

                    body {
                        text-transform: var(--_text-style---text-transform);
                        font-smoothing: antialiased;
                        -webkit-font-smoothing: antialiased;
                    }

                    a:not([class]) {
                        text-decoration: underline;
                    }

                    h1,
                    h2,
                    h3,
                    h4,
                    h5,
                    h6,
                    p,
                    blockquote,
                    label {
                        font-family: inherit;
                        font-size: inherit;
                        font-weight: inherit;
                        line-height: inherit;
                        letter-spacing: inherit;
                        text-transform: inherit;
                        text-wrap: inherit;
                        margin-top: 0;
                        margin-bottom: 0;
                    }

                    :is(.u-margin-trim, .u-rich-text)> :not(:not(.w-condition-invisible) ~ :not(.w-condition-invisible)) {
                        margin-top: 0;
                    }

                    :is(.u-margin-trim, .u-rich-text)> :not(:has(~ :not(.w-condition-invisible))) {
                        margin-bottom: 0;
                    }

                    .w-richtext a {
                        position: relative;
                        z-index: 4;
                    }

                    .u-child-contain>* {
                        display: inline-block;
                        width: 100%;
                        max-width: inherit;
                        margin-top: 0;
                    }

                    :is(h1, h2, h3, h4, h5, h6, p):not(.u-text-trim-off, :has([class*="u-text-style-"]))::before,
                    [class*="u-text-style-"]:not(.u-text-trim-off, :has(h1, h2, h3, h4, h5, h6, p))::before {
                        content: "";
                        display: table;
                        margin-bottom: calc(-0.51lh + var(--_text-style---trim-top));
                    }

                    :is(h1, h2, h3, h4, h5, h6, p):not(.u-text-trim-off, :has([class*="u-text-style-"]))::after,
                    [class*="u-text-style-"]:not(.u-text-trim-off, :has(h1, h2, h3, h4, h5, h6, p))::after {
                        content: "";
                        display: table;
                        margin-bottom: calc(-0.5lh + var(--_text-style---trim-bottom));
                    }

                    .u-line-clamp-1,
                    .u-line-clamp-2,
                    .u-line-clamp-3,
                    .u-line-clamp-4 {
                        -webkit-line-clamp: 1;
                        -webkit-box-orient: vertical;
                    }

                    .u-line-clamp-2 {
                        -webkit-line-clamp: 2;
                    }

                    .u-line-clamp-3 {
                        -webkit-line-clamp: 3;
                    }

                    .u-line-clamp-4 {
                        -webkit-line-clamp: 4;
                    }

                    /* Hide */

                    .u-hide-if-empty:empty,
                    .u-hide-if-empty:not(:has(> :not(.w-condition-invisible))),
                    .u-hide-if-empty-cms:not(:has(.w-dyn-item)),
                    .w-richtext[class*="u-text-style-"]> :not(h1, h2, h3, h4, h5, h6, p, blockquote, ul, ol, span),
                    .u-embed-js,
                    .u-embed-css {
                        display: none !important;
                    }

                    /* Focus State */

                    a,
                    button,
                    [tabindex],
                    .w-checkbox-input--inputType-custom,
                    .w-form-formradioinput--inputType-custom {
                        outline-offset: var(--focus--offset-outer);
                    }

                    a:focus-visible,
                    button:focus-visible,
                    [tabindex]:focus-visible,
                    .w-checkbox:has(:focus-visible) .w-checkbox-input--inputType-custom,
                    .w-radio:has(:focus-visible) .w-form-formradioinput--inputType-custom {
                        outline-color: var(--_theme---text);
                        outline-width: var(--focus--width);
                        outline-style: solid;
                    }

                    .w-checkbox-input--inputType-custom.w--redirected-focus,
                    .w-form-formradioinput--inputType-custom.w--redirected-focus {
                        box-shadow: none;
                    }

                    /* Global / Clickable Component */

                    .wf-design-mode .g_clickable_wrap {
                        z-index: 0;
                    }

                    .g_clickable_wrap a[href="#"] {
                        display: none;
                    }

                    .g_clickable_wrap a[href="#"]~button {
                        display: block;
                    }
                ` }} />
            </div>
        </div>
        <div className="styleguide_guide_wrap">
            <div className="w-embed">
                <style dangerouslySetInnerHTML={{ __html: `
                    html:not(.wf-design-mode) .styleguide_guide_wrap {
                        display: none;
                    }

                    .styleguide_guide_layout {
                        counter-reset: gridguides;
                    }

                    .styleguide_guide_layout>div::before {
                        counter-increment: gridguides;
                        content: counter(gridguides);
                    }
                ` }} />
            </div>
            <div className="styleguide_guide_contain u-container">
                <div className="styleguide_guide_layout u-grid-custom">
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                    <div className="styleguide_guide_column u-vflex-center-bottom"></div>
                </div>
            </div>
        </div>
        <div className="side_label">
            <div className="label_left">
                <div className="u-overflow-clip">
                    <div data-loader="label-left" className="label_text">© 2026</div>
                </div>
            </div>
            <div className="label_right">
                <div className="w-layout-vflex label_right_text_wrap"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 26 40" fill="none" preserveAspectRatio="none" data-loader="label-right-svg" className="label_svg"><mask id="mask0_1215_549"  maskUnits="userSpaceOnUse" x="0" y="0" width="26" height="40"><ellipse cx="12.6923" cy="20" rx="20" ry="12.6923" transform="rotate(90 12.6923 20)" fill="#D9D9D9"></ellipse></mask><g mask="url(#mask0_1215_549)"><path d="M23.8846 20C23.8846 25.2824 22.5225 29.9947 20.4003 33.3389C18.2664 36.701 15.5043 38.5 12.6923 38.5C9.88024 38.5 7.11806 36.701 4.98425 33.3389C2.86199 29.9947 1.49988 25.2824 1.49988 20C1.49988 14.7176 2.86199 10.0053 4.98425 6.66113C7.11807 3.29898 9.88025 1.50003 12.6923 1.5C15.5043 1.5 18.2664 3.299 20.4003 6.66113C22.5225 10.0053 23.8846 14.7176 23.8846 20Z" stroke="currentColor" strokeWidth="3"></path><path d="M26.9615 23.8467C26.9613 31.9396 20.4002 38.5 12.3072 38.5C4.21452 38.4998 -2.34583 31.9394 -2.34607 23.8467C-2.34607 15.7537 4.21437 9.19263 12.3073 9.19238C20.4003 9.19238 26.9615 15.7536 26.9615 23.8467Z" stroke="currentColor" strokeWidth="3"></path><path d="M26.9615 15.6157C26.9613 23.7086 20.4002 30.269 12.3072 30.269C4.21452 30.2688 -2.34583 23.7085 -2.34607 15.6157C-2.34607 7.52278 4.21437 0.961671 12.3073 0.961426C20.4003 0.961427 26.9615 7.52263 26.9615 15.6157Z" stroke="currentColor" strokeWidth="3"></path></g><line x1="12.8848" y1="38" x2="12.8848" y2="2" stroke="currentColor" strokeWidth="3"></line><line x1="2.38477" y1="18.5" x2="23.3848" y2="18.5" stroke="currentColor" strokeWidth="3"></line></svg>
                    <div
                        className="u-overflow-clip">
                        <div data-loader="label-right" className="label_text">Made in SLC.</div>
                </div>
            </div>
        </div>
    </div>
    <div data-nav-hide="component" className="nav_component">
        <div className="w-layout-vflex nav_container u-container">
            <div className="nav_layout"><a data-nav-logo="" href="/" aria-current="page" className="nav_logo w-inline-block w--current"><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 210 48" fill="none" preserveAspectRatio="none" data-logo-primary=" " data-nav-hide="svg" data-loader="logo" className="g_svg"><path d="M194.071 9.76297V3.08301H203.114V9.76297H210V16.4429H203.114V29.3918L203.526 29.8029H209.743V36.9967H202.498C199.894 36.9967 197.839 36.3201 196.332 34.967C194.824 33.5967 194.071 31.6698 194.071 29.1862V16.4429H188.675V9.76297H194.071Z" fill="currentColor"></path><path d="M169.906 0V11.6642H170.317C172.03 10.0542 174.513 9.24918 177.768 9.24918C181.108 9.24918 183.711 10.1313 185.578 11.8955C187.462 13.6425 188.404 16.1861 188.404 19.526V36.9967H179.361V20.2454C179.361 18.9608 179.001 17.976 178.282 17.2908C177.562 16.5886 176.534 16.2374 175.198 16.2374C173.623 16.2374 172.347 16.6828 171.37 17.5734C170.394 18.447 169.906 19.8344 169.906 21.7356V36.9967H160.862V0H169.906Z" fill="currentColor"></path><path d="M159.455 34.5817C159.455 38.9837 158.197 42.298 155.679 44.5246C153.178 46.7684 149.675 47.8903 145.171 47.8903C142.344 47.8903 139.887 47.4792 137.797 46.6571C135.724 45.8349 134.114 44.6959 132.967 43.24C131.819 41.8012 131.177 40.1484 131.04 38.2814V37.5106H139.313C139.416 38.5555 139.929 39.429 140.854 40.1312C141.779 40.8506 143.115 41.2103 144.862 41.2103C146.712 41.2103 148.117 40.7307 149.076 39.7716C150.035 38.8295 150.515 37.4935 150.515 35.7636V33.4256H150.104C149.23 34.3848 148.177 35.0699 146.943 35.481C145.71 35.8749 144.28 36.0719 142.653 36.0719C140.375 36.0719 138.302 35.5837 136.435 34.6074C134.585 33.6311 133.112 32.141 132.016 30.137C130.92 28.133 130.372 25.6409 130.372 22.6606C130.372 19.6803 130.92 17.1881 132.016 15.1842C133.112 13.1802 134.585 11.69 136.435 10.7137C138.302 9.73742 140.375 9.24927 142.653 9.24927C144.331 9.24927 145.796 9.46337 147.046 9.89157C148.314 10.3198 149.384 11.0477 150.258 12.0754H150.669V9.76311H159.455V34.5817ZM139.518 22.6606C139.518 24.7845 140.024 26.4116 141.034 27.5421C142.045 28.6725 143.424 29.2378 145.171 29.2378C146.918 29.2378 148.296 28.6725 149.307 27.5421C150.318 26.4116 150.823 24.7845 150.823 22.6606C150.823 20.5367 150.318 18.9095 149.307 17.7791C148.296 16.6486 146.918 16.0834 145.171 16.0834C143.424 16.0834 142.045 16.6486 141.034 17.7791C140.024 18.9095 139.518 20.5367 139.518 22.6606Z" fill="currentColor"></path><path d="M95.4319 9.76302H100.93V7.81042C100.93 5.32684 101.684 3.40849 103.191 2.05537C104.698 0.685125 106.754 0 109.357 0H128.523V6.26889H110.385L109.974 6.67996V9.76302H128.523V36.9967H119.48V16.443H109.974V36.9967H100.93V16.443H95.4319V9.76302Z" fill="currentColor"></path><path d="M76.4767 9.76294L82.2831 27.0795H82.6942L88.5006 9.76294H97.7241V10.5337L85.8286 40.1825C85.075 42.0494 84.2357 43.4882 83.3108 44.4987C82.403 45.5093 81.2554 46.2201 79.8681 46.6312C78.4978 47.0594 76.6908 47.2735 74.447 47.2735H68.0754V40.3366H74.3956C75.2006 40.3366 75.8087 40.1996 76.2198 39.9255C76.6308 39.6686 76.9648 39.2147 77.2218 38.5639L77.7613 37.2279L67.0477 10.5337V9.76294H76.4767Z" fill="currentColor"></path><path d="M42.7076 17.7277C42.896 16.0149 43.5212 14.5161 44.5831 13.2315C45.6622 11.9298 47.1438 10.9278 49.0279 10.2256C50.912 9.50618 53.1215 9.14648 55.6565 9.14648C59.6644 9.14648 62.7732 10.0714 64.9827 11.9212C67.1922 13.7711 68.297 16.5801 68.297 20.3483V36.9968H59.9727V34.6331H59.5617C59.0307 35.421 58.1486 36.0804 56.9154 36.6114C55.6822 37.1424 53.9608 37.4079 51.7513 37.4079C49.6445 37.4079 47.7947 37.0739 46.2017 36.4059C44.626 35.7207 43.4013 34.7444 42.5278 33.477C41.6542 32.1924 41.2175 30.6765 41.2175 28.9295C41.2175 26.3431 42.1081 24.3477 43.8895 22.9432C45.6708 21.5215 48.0173 20.6394 50.9291 20.2969L59.6644 19.2435V18.9095C59.6644 17.7105 59.3219 16.8199 58.6368 16.2375C57.9688 15.6552 56.9411 15.364 55.5537 15.364C54.1834 15.364 53.1129 15.638 52.3422 16.1861C51.5885 16.7171 51.1689 17.4879 51.0833 18.4984H42.7076V17.7277ZM50.2097 28.4156C50.2097 29.2035 50.5266 29.8372 51.1603 30.3168C51.8112 30.7964 52.7276 31.0362 53.9094 31.0362C55.6907 31.0362 57.0952 30.5909 58.1229 29.7002C59.1506 28.7924 59.6644 27.5078 59.6644 25.8464V24.9729L53.0359 25.8464C52.1966 25.9492 51.5115 26.2232 50.9805 26.6685C50.4666 27.1139 50.2097 27.6962 50.2097 28.4156Z" fill="currentColor"></path><path d="M40.1766 0V36.9967H31.133V0H40.1766Z" fill="currentColor"></path><path d="M17.4707 0C19.8857 0 22.0696 0.471022 24.0222 1.41307C25.9748 2.33799 27.5077 3.69111 28.6211 5.47243C29.7515 7.25375 30.3167 9.36908 30.3167 11.8184C30.3167 14.2677 29.7515 16.3916 28.6211 18.1901C27.5077 19.9885 25.9748 21.3673 24.0222 22.3265C22.0696 23.2685 19.8857 23.7396 17.4707 23.7396H9.35195V36.9967H0V0H17.4707ZM15.8778 16.1861C17.4878 16.1861 18.7553 15.8178 19.6802 15.0813C20.6051 14.3448 21.0676 13.2743 21.0676 11.8698C21.0676 10.4653 20.6051 9.39477 19.6802 8.65826C18.7553 7.92175 17.4878 7.5535 15.8778 7.5535H9.35195V16.1861H15.8778Z" fill="currentColor"></path></svg><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 73 56" fill="none" preserveAspectRatio="none" data-logo-secondary="" className="g_svg is-secondary-logo"><path fillRule="evenodd" clipRule="evenodd" d="M42.166 26.8516H39.0361C38.896 27.209 38.7246 27.5484 38.5225 27.8701C37.8734 28.9186 36.9792 29.723 35.8408 30.2822C34.7025 30.8314 33.4294 31.1055 32.0215 31.1055H27.2881L27.2881 38.835H21.8359L21.8359 17.2656L32.0215 17.2656C33.4295 17.2656 34.7025 17.5406 35.8408 18.0898C36.9792 18.6291 37.8734 19.4175 38.5225 20.4561C38.9896 21.1921 39.2898 22.0263 39.4258 22.958H42.166V21.8193C42.166 20.3714 42.6057 19.2527 43.4844 18.4639C44.3631 17.6651 45.5614 17.2657 47.0791 17.2656L51.3037 17.2656V20.9805H48.457C48.1079 20.9805 47.8484 21.0602 47.6787 21.2197C47.519 21.3695 47.4385 21.6193 47.4385 21.9688V22.958H51.3037V26.8516H47.4385V38.835H42.166V26.8516ZM31.0928 26.7021C32.0314 26.7021 32.7703 26.487 33.3096 26.0576C33.8487 25.6282 34.1182 25.0043 34.1182 24.1855C34.1181 23.3668 33.8488 22.7428 33.3096 22.3135C32.7703 21.8841 32.0314 21.6689 31.0928 21.6689H27.2881V26.7021H31.0928Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M36.5 55.3516C16.3416 55.3516 2.91813e-05 42.9607 0 27.6758C1.33625e-06 12.3908 16.3416 -1.7623e-06 36.5 0C56.6584 5.577e-06 73 12.3909 73 27.6758C73 42.9607 56.6584 55.3516 36.5 55.3516ZM36.5 50.2734C45.5736 50.2734 53.597 47.4789 59.2412 43.1992C64.882 38.9222 67.9219 33.3853 67.9219 27.6758C67.9219 21.9662 64.882 16.4294 59.2412 12.1523C53.597 7.8727 45.5736 5.07813 36.5 5.07812C27.4264 5.07812 19.403 7.87269 13.7588 12.1523C8.118 16.4294 5.07813 21.9662 5.07812 27.6758C5.07814 33.3853 8.11802 38.9221 13.7588 43.1992C19.403 47.4788 27.4264 50.2734 36.5 50.2734Z" fill="currentColor"></path></svg></a>
                <div
                    data-loader="nav-btn" data-menu="open-btn" className="w-layout-vflex nav_button_wrap">
                    <div className="nav_button_layout">
                        <div data-menu="line-top" className="nav_button_line"></div>
                        <div data-menu="line-bottom" className="nav_button_line"></div>
                    </div>
            </div>
        </div>
    </div>
    </div>
    <div data-menu="menu" className="menu u-theme-dark">
        <div data-menu="container" className="menu_container u-container u-grid-main">
            <div className="menu_layout">
                <div className="menu_top u-grid-column-2">
                    <div className="menu_left">
                        <nav className="menu_nav">
                            <ul id="" className="menu_nav_list">
                                <a data-anim-main-link-hover="" href="/work" className="main_nav_links w-inline-block">
                                    <div className="main_nav_link_txt u-text-style-h1 u-font-secondary">Work</div>
                                </a>
                                <a data-anim-main-link-hover="" href="/originals" className="main_nav_links w-inline-block">
                                    <div className="main_nav_link_txt u-text-style-h1 u-font-secondary">Originals</div>
                                </a>
                                <a data-anim-main-link-hover="" href="/studio" className="main_nav_links w-inline-block">
                                    <div className="main_nav_link_txt u-text-style-h1 u-font-secondary">The Studio</div>
                                </a>
                            </ul>
                        </nav>
                        <div className="menu_top_links">
                            <div data-wf--button-main--style={{  }} className="btn_main_wrap">
                                <div className="g_clickable_wrap"><a target="" href="mailto:hi@letsplayfight.com" className="g_clickable_link w-inline-block"><span className="g_clickable_text u-sr-only">Contact Us</span></a><button type="button" className="g_clickable_btn"><span className="g_clickable_text u-sr-only">Contact Us</span></button></div>
                                <div
                                    aria-hidden="true" className="btn_main_text">Contact Us</div>
                            <div aria-hidden="true" className="btn_main_text is-abs">hi@letsplayfight.com</div>
                            <div className="g_embed_css w-embed">
                                <style dangerouslySetInnerHTML={{ __html: `
                                    .btn_main_text.is-abs {
                                        transform: translateY(100%);
                                        opacity: 0;
                                        filter: blur(4px);
                                    }
                                ` }} />
                            </div>
                        </div><a data-anim-link-hover="" href="/playground" className="menu_top_link_bottom u-text-style-small">Playground</a><a data-anim-link-hover="" href="https://www.linkedin.com/in/playfight/" target="_blank" className="menu_top_link_bottom u-text-style-small">LinkedIn</a>
                        <a
                            data-anim-link-hover="" href="https://www.instagram.com/letsplayfight" target="_blank" className="menu_top_link_bottom u-text-style-small">Instagram</a>
                    </div>
                    <div className="menu_top_links_mobile">
                        <div data-wf--button-main--style={{  }} className="btn_main_wrap">
                            <div className="g_clickable_wrap"><a target="" href="mailto:hi@letsplayfight.com" className="g_clickable_link w-inline-block"><span className="g_clickable_text u-sr-only">Contact Us</span></a><button type="button" className="g_clickable_btn"><span className="g_clickable_text u-sr-only">Contact Us</span></button></div>
                            <div
                                aria-hidden="true" className="btn_main_text">Contact Us</div>
                        <div aria-hidden="true" className="btn_main_text is-abs">hi@letsplayfight.com</div>
                        <div className="g_embed_css w-embed">
                            <style dangerouslySetInnerHTML={{ __html: `
                                .btn_main_text.is-abs {
                                    transform: translateY(100%);
                                    opacity: 0;
                                    filter: blur(4px);
                                }
                            ` }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="menu_visual">
                <div className="w-layout-vflex menu_img u-visual-wrap"><video src="https://PlayfightSite.b-cdn.net/Home/PF%20Reel_2026.mp4" autoplay="autoplay" loop="" muted="" webkit-playsInline="" playsInline="" className="g_visual_video"></video></div>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="footer_credit_item"><a href="https://calendar.app.google/TADgw3kg9Xy4KQaC8" target="_blank" className="footer_credit_phone_link w-inline-block"><img src="https://cdn.prod.website-files.com/697fef4d1b1e73b328ad49cd/69a85deeeae0142fe477754b_cal.svg" loading="lazy" alt="" className="g_img cal"/><div className="footer_credit_phone_text_wrap u-overflow-clip"><div className="footer_credit_phone_text">Let’s chat. 801.673.8588</div><div className="footer_credit_phone_text is-abs">Schedule a Call</div></div></a></div>
            <div
                className="footer_nl">
                <div>Subscribe for the latest.</div>
                <div className="nl_form_main w-form">
                    <form id="wf-form-EMAIL" name="wf-form-EMAIL" data-name="EMAIL" action="https://letsplayfight.us22.list-manage.com/subscribe/post?u=0c3db12b1262a315edff9e81c&amp;amp;id=b365f9befb&amp;amp;f_id=00e7c2e1f0" method="post" className="form_main_list"
                        data-wf-page-id="697fef4d1b1e73b328ad49be" data-wf-element-id="2414bcc2-cd88-ec07-1583-ef6269a2c25a"><label className="nl_form_main_field_wrap"><input className="nl_form_main_field_input w-input" maxLength="256" name="EMAIL" data-name="EMAIL" placeholder="Email" type="email" id="EMAIL" required=""/><div className="nl_form_btn"><div className="g_clickable_wrap"><a target="" href="#" className="g_clickable_link w-inline-block"><span className="g_clickable_text u-sr-only">Submit</span></a><button type="submit" className="g_clickable_btn"><span className="g_clickable_text u-sr-only">Submit</span></button></div><svg data-wf--icon-arrow--variant="base" viewBox="0 0 8 13" fill="none" width="100%" height="100%" vector-path="non-scaling-stroke" aria-hidden="true" className="g_svg g_path"><path d="M0.506958 0.552979L6.50696 6.05298L0.506958 11.553" stroke="currentColor" strokeWidth="var(--border-width--main)" vector-effect="non-scaling-stroke"></path></svg></div></label></form>
                    <div
                        className="form_main_success_wrap w-form-done">
                        <div className="form_main_success_text">Thank you! Your submission has been received!</div>
                </div>
                <div className="form_main_error_wrap w-form-fail">
                    <div className="form_main_error_text">Oops! Something went wrong while submitting the form.</div>
                </div>
        </div>
    </div>
    </div>
    <div className="footer_bottom_mobile">
        <div className="footer_links_mobile"><a data-anim-link-hover="" href="/playground" className="nav_small_link_item u-text-style-small">Playground</a><a data-anim-link-hover="" href="https://www.linkedin.com/in/playfight/" target="_blank" className="nav_small_link_item u-text-style-small">LinkedIn</a>
            <a
                data-anim-link-hover="" href="https://www.instagram.com/letsplayfight" target="_blank" className="nav_small_link_item u-text-style-small">Instagram</a>
        </div>
        <div className="footer_nl">
            <div>Subscribe for the latest.</div>
            <div className="nl_form_main w-form">
                <form id="email-form" name="email-form" data-name="Email Form" method="get" className="form_main_list" data-wf-page-id="697fef4d1b1e73b328ad49be" data-wf-element-id="1167b9ce-6c4b-9fde-3687-641e709a1751"><label className="nl_form_main_field_wrap"><input className="nl_form_main_field_input w-input" maxLength="256" name="email-2" data-name="Email 2" placeholder="Email" type="email" id="email-address" required=""/><div className="nl_form_btn"><div className="g_clickable_wrap"><a target="" href="#" className="g_clickable_link w-inline-block"><span className="g_clickable_text u-sr-only">Submit</span></a><button type="submit" className="g_clickable_btn"><span className="g_clickable_text u-sr-only">Submit</span></button></div><svg data-wf--icon-arrow--variant="base" viewBox="0 0 8 13" fill="none" width="100%" height="100%" vector-path="non-scaling-stroke" aria-hidden="true" className="g_svg g_path"><path d="M0.506958 0.552979L6.50696 6.05298L0.506958 11.553" stroke="currentColor" strokeWidth="var(--border-width--main)" vector-effect="non-scaling-stroke"></path></svg></div></label></form>
                <div
                    className="form_main_success_wrap w-form-done">
                    <div className="form_main_success_text">Thank you! Your submission has been received!</div>
            </div>
            <div className="form_main_error_wrap w-form-fail">
                <div className="form_main_error_text">Oops! Something went wrong while submitting the form.</div>
            </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="canvas"></div>
    <div data-scroll-strength=".6" data-webgl-config="" data-bulge=".4" data-bulge-strength=".75" data-rgb-shift=".6" data-blur=".4" className="webgl_config"></div>
    <div data-loader="wrap" className="page_loader">
        <div data-loader="bg" className="page_loader_bg"></div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 98 48" fill="none" preserveAspectRatio="none" data-loader="svg-left" className="page_loader_svg is-left"><path d="M42.7077 17.7277C42.8961 16.0149 43.5213 14.5161 44.5832 13.2315C45.6623 11.9298 47.1439 10.9278 49.0279 10.2256C50.912 9.50618 53.1216 9.14648 55.6565 9.14648C59.6645 9.14648 62.7732 10.0714 64.9828 11.9212C67.1923 13.7711 68.2971 16.5801 68.2971 20.3483V36.9968H59.9728V34.6331H59.5617C59.0308 35.421 58.1487 36.0804 56.9154 36.6114C55.6822 37.1424 53.9608 37.4079 51.7513 37.4079C49.6446 37.4079 47.7947 37.0739 46.2018 36.4059C44.626 35.7207 43.4014 34.7444 42.5278 33.477C41.6543 32.1924 41.2175 30.6765 41.2175 28.9295C41.2175 26.3431 42.1082 24.3477 43.8895 22.9432C45.6708 21.5215 48.0174 20.6394 50.9292 20.2969L59.6645 19.2435V18.9095C59.6645 17.7105 59.3219 16.8199 58.6368 16.2375C57.9688 15.6552 56.9411 15.364 55.5538 15.364C54.1835 15.364 53.113 15.638 52.3422 16.1861C51.5886 16.7171 51.169 17.4879 51.0833 18.4984H42.7077V17.7277ZM50.2098 28.4156C50.2098 29.2035 50.5267 29.8372 51.1604 30.3168C51.8113 30.7964 52.7276 31.0362 53.9095 31.0362C55.6908 31.0362 57.0953 30.5909 58.123 29.7002C59.1507 28.7924 59.6645 27.5078 59.6645 25.8464V24.9729L53.0359 25.8464C52.1966 25.9492 51.5115 26.2232 50.9806 26.6685C50.4667 27.1139 50.2098 27.6962 50.2098 28.4156Z" fill="currentColor"></path><path d="M40.1767 0V36.9967H31.1331V0H40.1767Z" fill="currentColor"></path><path d="M17.4707 0C19.8857 0 22.0696 0.471022 24.0222 1.41307C25.9748 2.33799 27.5077 3.69111 28.6211 5.47243C29.7515 7.25375 30.3167 9.36908 30.3167 11.8184C30.3167 14.2677 29.7515 16.3916 28.6211 18.1901C27.5077 19.9885 25.9748 21.3673 24.0222 22.3265C22.0696 23.2685 19.8857 23.7396 17.4707 23.7396H9.35195V36.9967H0V0H17.4707ZM15.8778 16.1861C17.4878 16.1861 18.7553 15.8178 19.6802 15.0813C20.6051 14.3448 21.0676 13.2743 21.0676 11.8698C21.0676 10.4653 20.6051 9.39477 19.6802 8.65826C18.7553 7.92175 17.4878 7.5535 15.8778 7.5535H9.35195V16.1861H15.8778Z" fill="currentColor"></path><path d="M76.4766 9.76318L82.2831 27.0797H82.6941L88.5006 9.76318H97.724V10.5339L85.8286 40.1827C85.0749 42.0497 84.2357 43.4884 83.3107 44.499C82.403 45.5095 81.2554 46.2204 79.868 46.6314C78.4977 47.0596 76.6907 47.2737 74.4469 47.2737H68.0753V40.3369H74.3956C75.2006 40.3369 75.8086 40.1998 76.2197 39.9258C76.6308 39.6689 76.9648 39.215 77.2217 38.5641L77.7612 37.2281L67.0476 10.5339V9.76318H76.4766Z" fill="currentColor"></path></svg>
        <div
            className="page_loader_center">
            <div data-loader="loader-num" className="u-text-style-display is-loader-num">0</div>
    </div><svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 115 48" fill="none" preserveAspectRatio="none" data-loader="svg-right" className="page_loader_svg is-right"><path d="M98.639 9.76297V3.08301H107.683V9.76297H114.568V16.4429H107.683V29.3918L108.094 29.8029H114.311V36.9967H107.066C104.463 36.9967 102.407 36.3201 100.9 34.967C99.3926 33.5967 98.639 31.6698 98.639 29.1862V16.4429H93.2437V9.76297H98.639Z" fill="currentColor"></path><path d="M74.4741 0V11.6642H74.8851C76.598 10.0542 79.0815 9.24918 82.3359 9.24918C85.6758 9.24918 88.2793 10.1313 90.1463 11.8955C92.0304 13.6425 92.9724 16.1861 92.9724 19.526V36.9967H83.9288V20.2454C83.9288 18.9608 83.5691 17.976 82.8497 17.2908C82.1303 16.5886 81.1026 16.2374 79.7667 16.2374C78.1909 16.2374 76.9148 16.6828 75.9385 17.5734C74.9622 18.447 74.4741 19.8344 74.4741 21.7356V36.9967H65.4304V0H74.4741Z" fill="currentColor"></path><path d="M64.0235 34.5815C64.0235 38.9834 62.7646 42.2977 60.2467 44.5244C57.746 46.7681 54.2433 47.89 49.7386 47.89C46.9125 47.89 44.4546 47.479 42.365 46.6568C40.2925 45.8347 38.6824 44.6956 37.5349 43.2398C36.3873 41.801 35.745 40.1481 35.6079 38.2812V37.5104H43.8808C43.9836 38.5552 44.4974 39.4287 45.4224 40.131C46.3473 40.8504 47.6833 41.2101 49.4303 41.2101C51.2802 41.2101 52.6847 40.7305 53.6438 39.7713C54.603 38.8293 55.0826 37.4933 55.0826 35.7633V33.4253H54.6715C53.798 34.3845 52.7446 35.0696 51.5114 35.4807C50.2782 35.8747 48.848 36.0716 47.2208 36.0716C44.9428 36.0716 42.8703 35.5835 41.0033 34.6072C39.1535 33.6309 37.6804 32.1407 36.5842 30.1368C35.488 28.1328 34.9399 25.6406 34.9399 22.6603C34.9399 19.68 35.488 17.1879 36.5842 15.1839C37.6804 13.1799 39.1535 11.6898 41.0033 10.7135C42.8703 9.73718 44.9428 9.24902 47.2208 9.24902C48.8994 9.24902 50.3638 9.46312 51.6142 9.89133C52.8816 10.3195 53.9521 11.0475 54.8257 12.0752H55.2368V9.76287H64.0235V34.5815ZM44.0864 22.6603C44.0864 24.7842 44.5916 26.4114 45.6022 27.5418C46.6128 28.6723 47.9916 29.2375 49.7386 29.2375C51.4857 29.2375 52.8645 28.6723 53.8751 27.5418C54.8856 26.4114 55.3909 24.7842 55.3909 22.6603C55.3909 20.5364 54.8856 18.9093 53.8751 17.7788C52.8645 16.6484 51.4857 16.0831 49.7386 16.0831C47.9916 16.0831 46.6128 16.6484 45.6022 17.7788C44.5916 18.9093 44.0864 20.5364 44.0864 22.6603Z" fill="currentColor"></path><path d="M0 9.76302H5.49812V7.81042C5.49812 5.32684 6.25176 3.40849 7.75903 2.05537C9.2663 0.685125 11.3217 0 13.9252 0H33.0915V6.26889H14.9528L14.5418 6.67996V9.76302H33.0915V36.9967H24.0479V16.443H14.5418V36.9967H5.49812V16.443H0V9.76302Z" fill="currentColor"></path></svg>
    <div
        className="u-embed-css w-embed">
        <style dangerouslySetInnerHTML={{ __html: `
            :is(.wf-design-mode, .wf-editor) .page_loader {
                visibility: hidden;
            }
        ` }} />
        </div>
        </div>
        
    </>
  );
}
