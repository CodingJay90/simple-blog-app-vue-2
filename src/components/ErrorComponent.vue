<template>
  <div>
    <div class="subredditvars-r-whitepeopletwitter">
      <div class="_1nxEQl5D2Bx2jxDILRHemb" aria-hidden="false">
        <div class="TbMmDiSaSaBQFF9F3FGe8 _2ze7IsXK_2d3McYZHK6v_D">
          <div class="TbMmDiSaSaBQFF9F3FGe8">
            <svg
              class="_2AxaYiv6EkZse5msRZqowQ"
              viewBox="0 0 24 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#000"
                d="M5.1 3.2c.5.3 1.1.3 1.7.1 1.4-.5 2.9-.9 4.5-.7 1.2.2 1.8.2 2.3.4 1 .4 2 .9 3 1.4.5.3 1 .8 1.5 1.2.2.2.5.4.7.4 2.4-.1 4.1 1 5 3.3.8 2-.5 4.5-2 5.1-.3.1-.6.4-.7.7-.6 2-1.9 3.3-3.7 4.2-.1.1-.2.1-.3.1-.7.3-3.9 1.7-7.9 1-4.8-.9-9.3-4.6-8.7-10.2.1-1 0-1.9-.3-2.9-.2-.2-.2-.5-.2-.8.1-2.7 2.9-4.6 5.1-3.3z"
              ></path>
              <path
                fill="#FFF"
                d="M.7 7.5c.4 1.3.7.5.8.5-.1.6-.3 1.3-.3 1.9-.3 2.4.3 4.6 1.9 6.3 3.7 4 8.5 4.6 13.2 2.7 1.2-.5 2.6-1.7 3.3-2.8.8-1.4 1.3-2.8 1.2-4.4 0-.1 0-.2.1-.4.1.4.3.8.3 1.1.1.4 0 .8 0 1.3 1.4-.5 2.2-2.3 1.8-3.9-.5-2-2.1-3.3-3.9-3 .9.8 1.6 3.3 1.4 3.6-1.5-3.8-4.4-6.1-8.2-6.8-3.8-.8-7.2.4-10.1 3.2.6-1.2 1.7-2 2.9-2.9-.6-.1-1-.3-1.4-.3-1.8.1-3.5 2.1-3 3.9z"
              ></path>
              <path
                fill="#000"
                d="M7.2 16.7c1.4.6 2.9.9 4.4 1 .6 0 1.3-.4.3-.5-1.2-.1-2.4-.3-3.5-.8-.3-.1-.7-.1-1 0-.1 0-.5.2-.2.3zM7.3 13.4c-.1 0-.2-.1-.3-.2-.1-.2-.2-.4-.4-.6-.6-.6-1.4-1.1-2.2-.9-.3.1-.5.2-.8.2h-.5c0-.1-.1-.3 0-.4.2-.2.5-.3.6-.4 1.6-.6 3.7.6 3.9 1.7v.3c0 .3-.2.3-.3.3zm9.8 1.1c-.1 0-.3 0-.4-.1-.1 0-.1-.1-.2-.1-.7-.5-1.5-.5-2.3 0-.2.1-.5.2-.7.3 0-.2 0-.4.1-.6.6-.6 1.7-.8 2.7-.5.3.1.7.5.9.8.1 0 0 .2-.1.2z"
              ></path>
              <path
                fill="#000"
                d="M16.1 20.7c-2-.2-2.7-.9-2.9-2.5-.1-.9-.3-1.6-.7-2.4-.4-.9-.5-1.4-1.5-1.7-1.3-.5-1.9-1.6-2-2.6 0-.8.2-1.7.8-2.3 1.1-1.1 2.9-1.1 4.2-.5 1.3.6 3.8 3.2 4.3 4.5 1.6 4.2.8 7.2-2.2 7.5zM12 5.6c.1.2.1.7.6.5.4-.1.4-.6-.2-1.6-.3-.6-.5-1.6 0-2.2 1-1.3 2.3-1 3.5-.7.4.1 1.5.3 1.5.8 0 .7.6 1.8 1.2 2.2 1.2 1 3.5-.1 3.5-1.8 0-1.5-1.1-2.7-2.5-2.6-.6 0-1.6.7-2 1.2-.6-.2-1.2-.4-1.9-.5-1.3-.3-2.6-.3-3.7.7-1.2 1.1-.8 2.9 0 4-.1-.1-.2-.2-.3-.4.1.1.2.3.3.4.1.1-.6-.9 0 0z"
              ></path>
              <path
                fill="#FFF"
                d="M21.3 3.1c-.2.5-.6.9-1 1-.4.1-.9 0-1.3-.3s-.7-.7-.7-1.1c0-.2 0-.8.8-1.4.5-.4 1.4 0 1.9.4.2.4.5.8.3 1.4zM18 14.6c-.5-2.5-3.8-6.4-6.8-5.3-1.4.5-1.7 2.4-.8 3.5.7.8 2.1 1.2 3 1.6-.3 0-.6.1-.9 0 1.2 1.6.6 4.7 2.8 5.2 2.5.7 3.4-1.7 2.7-5z"
              ></path>
            </svg>
            <p class="_2Nj40mHW74FkFefq6oqWkb">
              {{ message }}
              <br />
              <small>{{ subMessage }}</small>
            </p>
            <button
              role="button"
              class="_2iuoyPiKHN3kfOoeIQalDT _10BQ7pjWbeYP63SAPNS8Ts HNozj_dKjQZ59ZsfEegz8"
              @click="this.$router.reload"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: String,
    subMessage: String,
  },
};
</script>
<style scoped>
.subredditvars-r-whitepeopletwitter {
  --newCommunityTheme-actionIcon: #878a8c;
  --newCommunityTheme-actionIconAlpha20: rgba(135, 138, 140, 0.2);
  --newCommunityTheme-actionIconAlpha50: rgba(135, 138, 140, 0.5);
  --newCommunityTheme-actionIconShaded80: #6c6e70;
  --newCommunityTheme-actionIconTinted80: #9fa1a3;
  --newCommunityTheme-active: #0079d3;
  --newCommunityTheme-activeAlpha10: rgba(0, 121, 211, 0.1);
  --newCommunityTheme-activeAlpha20: rgba(0, 121, 211, 0.2);
  --newCommunityTheme-activeAlpha50: rgba(0, 121, 211, 0.5);
  --newCommunityTheme-activeLight60: #33a8ff;
  --newCommunityTheme-activeShaded80: #0060a8;
  --newCommunityTheme-activeShaded90: #006cbd;
  --newCommunityTheme-activeTinted05: #f2f8fc;
  --newCommunityTheme-backgroundImage: initial;
  --newCommunityTheme-backgroundImagePosition: cover;
  --newCommunityTheme-banner-backgroundColor: #33a8ff;
  --newCommunityTheme-banner-backgroundImage: initial;
  --newCommunityTheme-banner-backgroundImagePosition: cover;
  --newCommunityTheme-banner-communityNameFormat: slashtag;
  --newCommunityTheme-banner-height: 64;
  --newCommunityTheme-banner-iconColor: #0079d3;
  --newCommunityTheme-banner-iconDimensions-borderRadius: 24;
  --newCommunityTheme-banner-iconDimensions-customSize: 32;
  --newCommunityTheme-banner-iconDimensions-padding: 6;
  --newCommunityTheme-banner-iconDimensions-size: 24;
  --newCommunityTheme-banner-iconImage: initial;
  --newCommunityTheme-banner-lineHeight: 38;
  --newCommunityTheme-banner-positionedImage: initial;
  --newCommunityTheme-banner-positionedImageAlignment: left;
  --newCommunityTheme-banner-positionedImageHeight: 48;
  --newCommunityTheme-banner-secondaryBannerPositionedImage: initial;
  --newCommunityTheme-body: #ffffff;
  --newCommunityTheme-bodyAlpha50: rgba(255, 255, 255, 0.5);
  --newCommunityTheme-bodyAlpha70: rgba(255, 255, 255, 0.7);
  --newCommunityTheme-bodyAlpha80: rgba(255, 255, 255, 0.8);
  --newCommunityTheme-bodyFade: #ffffff00;
  --newCommunityTheme-bodyShaded80: #ccc;
  --newCommunityTheme-bodyText: #1c1c1c;
  --newCommunityTheme-bodyTextAlpha03: rgba(28, 28, 28, 0.03);
  --newCommunityTheme-bodyTextAlpha20: rgba(28, 28, 28, 0.2);
  --newCommunityTheme-bodyTextShaded20: #050505;
  --newCommunityTheme-bodyTextTinted20: #d1d1d1;
  --newCommunityTheme-bodyTinted50: #fff;
  --newCommunityTheme-bodyTinted80: #fff;
  --newCommunityTheme-button: #0079d3;
  --newCommunityTheme-buttonAlpha05: rgba(0, 121, 211, 0.05);
  --newCommunityTheme-buttonAlpha10: rgba(0, 121, 211, 0.1);
  --newCommunityTheme-buttonAlpha20: rgba(0, 121, 211, 0.2);
  --newCommunityTheme-buttonAlpha40: rgba(0, 121, 211, 0.4);
  --newCommunityTheme-buttonAlpha50: rgba(0, 121, 211, 0.5);
  --newCommunityTheme-buttonAlpha80: rgba(0, 121, 211, 0.8);
  --newCommunityTheme-buttonShaded80: #0060a8;
  --newCommunityTheme-buttonTinted20: #cce4f6;
  --newCommunityTheme-buttonTinted50: #7fbce9;
  --newCommunityTheme-buttonTinted80: #3293db;
  --newCommunityTheme-canvas: #dae0e6;
  --newCommunityTheme-canvasImgPosition: cover;
  --newCommunityTheme-canvasImgUrl: initial;
  --newCommunityTheme-errorText: #ff0000;
  --newCommunityTheme-field: #f6f7f8;
  --newCommunityTheme-fieldFade: #f6f7f800;
  --newCommunityTheme-flair: #edeff1;
  --newCommunityTheme-highlight: #e5f1fa;
  --newCommunityTheme-inactive: #edeff1;
  --newCommunityTheme-invertFilter: invert(0);
  --newCommunityTheme-lightText: #ffffff;
  --newCommunityTheme-lightTextAlpha75: rgba(255, 255, 255, 0.75);
  --newCommunityTheme-line: #edeff1;
  --newCommunityTheme-lineShaded80: #bdbfc0;
  --newCommunityTheme-lineShaded90: #d5d7d8;
  --newCommunityTheme-lineShadedNinety: #d5d7d8;
  --newCommunityTheme-linkText: #0079d3;
  --newCommunityTheme-linkTextAlpha80: rgba(0, 121, 211, 0.5);
  --newCommunityTheme-linkTextShaded80: #0060a8;
  --newCommunityTheme-linkTextTinted80: #3293db;
  --newCommunityTheme-linkTextWithBody: #3f9ade;
  --newCommunityTheme-menu: #ffffff;
  --newCommunityTheme-menuActiveText: #0079d3;
  --newCommunityTheme-menuButtonBackground-active: rgba(0, 0, 0, 0.08);
  --newCommunityTheme-menuButtonBackground-focus: rgba(0, 0, 0, 0.12);
  --newCommunityTheme-menuButtonBackground-hover: rgba(0, 0, 0, 0.04);
  --newCommunityTheme-menuInactiveText: #0079d3;
  --newCommunityTheme-metaText: #7c7c7c;
  --newCommunityTheme-monospaceColor: #ff006d;
  --newCommunityTheme-navBar-activeLink: #0079d3;
  --newCommunityTheme-navBar-activeSubmenuCaret: #0079d3;
  --newCommunityTheme-navBar-activeSubmenuLink: #0079d3;
  --newCommunityTheme-navBar-backgroundColor: #dbf0ff;
  --newCommunityTheme-navBar-backgroundImage: initial;
  --newCommunityTheme-navBar-hoverLink: #0079d3;
  --newCommunityTheme-navBar-inactiveLink: #0079d3;
  --newCommunityTheme-navBar-inactiveSubmenuCaret: #33a8ff;
  --newCommunityTheme-navBar-inactiveSubmenuLink: #33a8ff;
  --newCommunityTheme-navBar-submenuBackgroundColor: #dbf0ff;
  --newCommunityTheme-navIcon: #1a1a1b;
  --newCommunityTheme-navIconFaded10: rgba(26, 26, 27, 0.1);
  --newCommunityTheme-nsfwBlocking-bgcolor: #edeff1;
  --newCommunityTheme-nsfwBlocking-color: #030303;
  --newCommunityTheme-nsfwBlocking-contentTitleBgColor: #f6f7f8;
  --newCommunityTheme-nsfwBlocking-mainCtaBgColor: #fff;
  --newCommunityTheme-pageHeader: #0079d3;
  --newCommunityTheme-placeholder: #d6d6d6;
  --newCommunityTheme-placeholderImage: initial;
  --newCommunityTheme-placeholderImagePosition: cover;
  --newCommunityTheme-post: #ffffff;
  --newCommunityTheme-postError: #ffe5e5;
  --newCommunityTheme-postFlairText: #1a1a1b;
  --newCommunityTheme-postIcon: #898989;
  --newCommunityTheme-postLine: #ccc;
  --newCommunityTheme-postLineShaded80: #a3a3a3;
  --newCommunityTheme-postLineShaded90: #b7b7b7;
  --newCommunityTheme-postTinted20: #fff;
  --newCommunityTheme-postTransparent20: rgba(255, 255, 255, 0.8);
  --newCommunityTheme-primaryButtonShadedEighty: #0060a8;
  --newCommunityTheme-primaryButtonTintedEighty: #3293db;
  --newCommunityTheme-primaryButtonTintedFifty: #7fbce9;
  --newCommunityTheme-primaryButtonTintedSixty: #66aee4;
  --newCommunityTheme-report: #fff7e5;
  --newCommunityTheme-textTransparentizedEighty: rgba(26, 26, 27, 0.2);
  --newCommunityTheme-titleText: #222222;
  --newCommunityTheme-voteIcons-downvoteActive: initial;
  --newCommunityTheme-voteIcons-downvoteInactive: initial;
  --newCommunityTheme-voteIcons-upvoteActive: initial;
  --newCommunityTheme-voteIcons-upvoteInactive: initial;
  --newCommunityTheme-voteText-base: #898989;
  --newCommunityTheme-voteText-downvote: #7193ff;
  --newCommunityTheme-voteText-downvoteShaded80: #5a75cc;
  --newCommunityTheme-voteText-downvoteTinted80: #8da8ff;
  --newCommunityTheme-voteText-upvote: #ff4500;
  --newCommunityTheme-voteText-upvoteShaded80: #cc3700;
  --newCommunityTheme-voteText-upvoteTinted80: #ff6a32;
  --newCommunityTheme-widgetColors-lineColor: rgba(26, 26, 27, 0.07);
  --newCommunityTheme-widgetColors-sidebarWidgetBackgroundColor: #ffffff;
  --newCommunityTheme-widgetColors-sidebarWidgetBorderColor: #ccc;
  --newCommunityTheme-widgetColors-sidebarWidgetHeaderColor: #ffffff;
  --newCommunityTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: rgba(
    255,
    255,
    255,
    0.6
  );
  --newCommunityTheme-widgetColors-sidebarWidgetTextColor: #1a1a1b;
  --newCommunityTheme-widgetColors-sidebarWidgetTextColorShaded80: #141415;
  --newCommunityTheme-widgetColors-sidebarWidgetTitleColor: #1a1a1b;
  --newRedditTheme-actionIcon: #878a8c;
  --newRedditTheme-actionIconAlpha20: rgba(135, 138, 140, 0.2);
  --newRedditTheme-actionIconAlpha50: rgba(135, 138, 140, 0.5);
  --newRedditTheme-actionIconShaded80: #6c6e70;
  --newRedditTheme-actionIconTinted80: #9fa1a3;
  --newRedditTheme-active: #24a0ed;
  --newRedditTheme-activeAlpha10: rgba(36, 160, 237, 0.1);
  --newRedditTheme-activeAlpha20: rgba(36, 160, 237, 0.2);
  --newRedditTheme-activeAlpha50: rgba(36, 160, 237, 0.5);
  --newRedditTheme-activeLight60: #42adf0;
  --newRedditTheme-activeShaded80: #1c80bd;
  --newRedditTheme-activeShaded90: #2090d5;
  --newRedditTheme-activeTinted05: #f4fafe;
  --newRedditTheme-banner-backgroundColor: #24a0ed;
  --newRedditTheme-banner-backgroundImage: initial;
  --newRedditTheme-banner-backgroundImagePosition: cover;
  --newRedditTheme-banner-communityNameFormat: slashtag;
  --newRedditTheme-banner-height: 64;
  --newRedditTheme-banner-iconColor: #24a0ed;
  --newRedditTheme-banner-iconDimensions-borderRadius: 24;
  --newRedditTheme-banner-iconDimensions-customSize: 32;
  --newRedditTheme-banner-iconDimensions-padding: 6;
  --newRedditTheme-banner-iconDimensions-size: 24;
  --newRedditTheme-banner-iconImage: initial;
  --newRedditTheme-banner-lineHeight: 38;
  --newRedditTheme-banner-positionedImage: initial;
  --newRedditTheme-banner-positionedImageAlignment: cover;
  --newRedditTheme-banner-positionedImageHeight: 48;
  --newRedditTheme-banner-secondaryBannerPositionedImage: initial;
  --newRedditTheme-body: #ffffff;
  --newRedditTheme-bodyAlpha50: rgba(255, 255, 255, 0.5);
  --newRedditTheme-bodyAlpha70: rgba(255, 255, 255, 0.7);
  --newRedditTheme-bodyAlpha80: rgba(255, 255, 255, 0.8);
  --newRedditTheme-bodyFade: #ffffff00;
  --newRedditTheme-bodyShaded80: #ccc;
  --newRedditTheme-bodyText: #1c1c1c;
  --newRedditTheme-bodyTextAlpha03: rgba(28, 28, 28, 0.03);
  --newRedditTheme-bodyTextAlpha20: rgba(28, 28, 28, 0.2);
  --newRedditTheme-bodyTextShaded20: #050505;
  --newRedditTheme-bodyTextTinted20: #d1d1d1;
  --newRedditTheme-bodyTinted50: #fff;
  --newRedditTheme-bodyTinted80: #fff;
  --newRedditTheme-button: #0079d3;
  --newRedditTheme-buttonAlpha05: rgba(0, 121, 211, 0.05);
  --newRedditTheme-buttonAlpha10: rgba(0, 121, 211, 0.1);
  --newRedditTheme-buttonAlpha20: rgba(0, 121, 211, 0.2);
  --newRedditTheme-buttonAlpha40: rgba(0, 121, 211, 0.4);
  --newRedditTheme-buttonAlpha50: rgba(0, 121, 211, 0.5);
  --newRedditTheme-buttonAlpha80: rgba(0, 121, 211, 0.8);
  --newRedditTheme-buttonShaded80: #0060a8;
  --newRedditTheme-buttonTinted20: #cce4f6;
  --newRedditTheme-buttonTinted50: #7fbce9;
  --newRedditTheme-buttonTinted80: #3293db;
  --newRedditTheme-canvas: #dae0e6;
  --newRedditTheme-errorText: #ff0000;
  --newRedditTheme-field: #f6f7f8;
  --newRedditTheme-fieldFade: #f6f7f800;
  --newRedditTheme-flair: #edeff1;
  --newRedditTheme-highlight: #e9f5fd;
  --newRedditTheme-inactive: #edeff1;
  --newRedditTheme-invertFilter: invert(0);
  --newRedditTheme-lightText: #ffffff;
  --newRedditTheme-lightTextAlpha75: rgba(255, 255, 255, 0.75);
  --newRedditTheme-line: #edeff1;
  --newRedditTheme-lineShaded80: #bdbfc0;
  --newRedditTheme-lineShaded90: #d5d7d8;
  --newRedditTheme-linkText: #0079d3;
  --newRedditTheme-linkTextAlpha80: rgba(0, 121, 211, 0.5);
  --newRedditTheme-linkTextShaded80: #0060a8;
  --newRedditTheme-linkTextTinted80: #3293db;
  --newRedditTheme-linkTextWithBody: #3f9ade;
  --newRedditTheme-menu: #ffffff;
  --newRedditTheme-menuActiveText: #0079d3;
  --newRedditTheme-menuButtonBackground-active: rgba(0, 0, 0, 0.08);
  --newRedditTheme-menuButtonBackground-focus: rgba(0, 0, 0, 0.12);
  --newRedditTheme-menuButtonBackground-hover: rgba(0, 0, 0, 0.04);
  --newRedditTheme-menuInactiveText: #0079d3;
  --newRedditTheme-metaText: #7c7c7c;
  --newRedditTheme-metaTextAlpha50: rgba(120, 124, 126, 0.5);
  --newRedditTheme-metaTextShaded80: #606364;
  --newRedditTheme-monospaceColor: #ff006d;
  --newRedditTheme-navBar-activeLink: #e9f5fd;
  --newRedditTheme-navBar-activeSubmenuCaret: #24a0ed;
  --newRedditTheme-navBar-activeSubmenuLink: #24a0ed;
  --newRedditTheme-navBar-backgroundColor: #24a0ed;
  --newRedditTheme-navBar-backgroundImage: initial;
  --newRedditTheme-navBar-hoverLink: #e9f5fd;
  --newRedditTheme-navBar-inactiveLink: #edeff1;
  --newRedditTheme-navBar-inactiveSubmenuCaret: #42adf0;
  --newRedditTheme-navBar-inactiveSubmenuLink: #42adf0;
  --newRedditTheme-navBar-submenuBackgroundColor: #def1fc;
  --newRedditTheme-navIcon: #1a1a1b;
  --newRedditTheme-navIconFaded10: rgba(26, 26, 27, 0.1);
  --newRedditTheme-nsfwBlocking-bgcolor: #edeff1;
  --newRedditTheme-nsfwBlocking-color: #030303;
  --newRedditTheme-nsfwBlocking-contentTitleBgColor: #f6f7f8;
  --newRedditTheme-nsfwBlocking-mainCtaBgColor: #fff;
  --newRedditTheme-pageHeader: #0079d3;
  --newRedditTheme-placeholder: #d6d6d6;
  --newRedditTheme-post: #ffffff;
  --newRedditTheme-postError: #ffe5e5;
  --newRedditTheme-postFlairText: #1a1a1b;
  --newRedditTheme-postIcon: #898989;
  --newRedditTheme-postLine: #ccc;
  --newRedditTheme-postLineShaded80: #a3a3a3;
  --newRedditTheme-postLineShaded90: #b7b7b7;
  --newRedditTheme-postTinted20: #fff;
  --newRedditTheme-postTransparent20: rgba(255, 255, 255, 0.8);
  --newRedditTheme-report: #fff7e5;
  --newRedditTheme-search-syntaxHighlightBackgroundColor: #e9f5fd;
  --newRedditTheme-search-syntaxHighlightColor: #1a1a1a;
  --newRedditTheme-titleText: #1a1a1b;
  --newRedditTheme-upsell-appleIcon: #000000;
  --newRedditTheme-upsell-ssoButtonBorderColor: #d3d6da;
  --newRedditTheme-upsell-ssoButtonTextColor: #3d4043;
  --newRedditTheme-voteIcons-downvoteActive: initial;
  --newRedditTheme-voteIcons-downvoteInactive: initial;
  --newRedditTheme-voteIcons-upvoteActive: initial;
  --newRedditTheme-voteIcons-upvoteInactive: initial;
  --newRedditTheme-voteText-base: #898989;
  --newRedditTheme-voteText-downvote: #7193ff;
  --newRedditTheme-voteText-downvoteShaded80: #5a75cc;
  --newRedditTheme-voteText-downvoteTinted80: #8da8ff;
  --newRedditTheme-voteText-upvote: #ff4500;
  --newRedditTheme-voteText-upvoteShaded80: #cc3700;
  --newRedditTheme-voteText-upvoteTinted80: #ff6a32;
  --newRedditTheme-widgetColors-lineColor: rgba(26, 26, 27, 0.07);
  --newRedditTheme-widgetColors-sidebarWidgetBackgroundColor: #ffffff;
  --newRedditTheme-widgetColors-sidebarWidgetBorderColor: #ccc;
  --newRedditTheme-widgetColors-sidebarWidgetHeaderColor: #ffffff;
  --newRedditTheme-widgetColors-sidebarWidgetHeaderColorAlpha60: rgba(
    255,
    255,
    255,
    0.6
  );
  --newRedditTheme-widgetColors-sidebarWidgetTextColor: #1a1a1b;
  --newRedditTheme-widgetColors-sidebarWidgetTextColorShaded80: #141415;
  --newRedditTheme-widgetColors-sidebarWidgetTitleColor: #1a1a1b;
  --subredditContext-emojiHeight: initial;
  --subredditContext-emojiWidth: initial;
}
._1nxEQl5D2Bx2jxDILRHemb {
  transition: margin-top 0.3s ease;
  padding-top: 48px;
}

._2ze7IsXK_2d3McYZHK6v_D,
._3kZ_esGcijvfnM9KjA27vj {
  background-color: var(--newCommunityTheme-body);
  border-radius: 4px;
  height: 500px;
  margin: 81px auto 60px;
  max-width: 95%;
  position: relative;
  width: 1200px;
}

.TbMmDiSaSaBQFF9F3FGe8 {
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 340px;
}

.TbMmDiSaSaBQFF9F3FGe8 {
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: center;
  justify-content: center;
  min-height: 340px;
}
._1-f8S_KoiOmIpA8kGxOgfh,
._2AxaYiv6EkZse5msRZqowQ {
  height: 28px;
  margin-bottom: 20px;
  width: 28px;
}

._2Nj40mHW74FkFefq6oqWkb {
  margin: 0 50px 20px;
  text-align: center;
}
._39dVqXnozb8JxasPyFPu6C,
._2Nj40mHW74FkFefq6oqWkb {
  font-size: 22px;
  font-weight: 500;
  line-height: 40px;
  color: var(--newCommunityTheme-metaText);
  opacity: 1;
}

._10BQ7pjWbeYP63SAPNS8Ts {
  position: relative;
  background-color: var(--newCommunityTheme-button);
  border: none;
  color: var(--newCommunityTheme-body);
  fill: var(--newCommunityTheme-body);
}
.HNozj_dKjQZ59ZsfEegz8 {
  font-family: Noto Sans, Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: unset;
  line-height: 17px;
  text-transform: unset;
  min-height: 32px;
  min-width: 32px;
  padding: 4px 16px;
}
._2iuoyPiKHN3kfOoeIQalDT {
  -ms-flex-align: center;
  align-items: center;
  border-radius: 9999px;
  box-sizing: border-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  position: relative;
  text-align: center;
  width: auto;
}
button {
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: initial;
}
</style>
