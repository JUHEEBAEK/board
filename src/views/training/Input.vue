<template>
  <div class="container board__container">
    <div class="row board__content">
      <div class="col cols-9 cols-sm-8 cols-xs-12">
        <div class="row first__box">
          <div class="col cols-8 cols-xs-12 box__field"></div>
          <div class="col cols-4 cols-sm-5 cols-xs-12 box__actions">
            <div class="actions__header">
              <div class="header__buttons header-first">
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/first/functions-rotate.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/first/functions-new.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/first/functions-bin.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/first/functions-back.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/first/functions-share.png"
                    alt="rotate"
                  />
                </button>
              </div>
              <div class="header__buttons header-second">
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/second/draw-move-click.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/second/middle-line.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/second/middle-line.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/second/middle-line.png"
                    alt="rotate"
                  />
                </button>
                <button class="button button--square">
                  <img
                    class="image__box"
                    src="@/assets/images/icon/second/color-dot.png"
                    alt="rotate"
                  />
                </button>
              </div>
              <div class="actions__content">
                <div class="content__search">
                  <div class="input__slot">
                    <img
                      class="image__box small"
                      src="@/assets/images/icon/loupe.png"
                      alt="rotate"
                    />
                    <input class="input__field" type="text" v-model="search" />
                  </div>
                </div>
                <div class="content__images">
                  <img
                    class="image__marks ma-1"
                    v-for="(item, idx) in imageList"
                    :key="idx"
                    :src="$imgBaseUrl + item.path + '.png'"
                    :alt="item.alt"
                  />
                  <!-- :src="`@/assets/images/marks/${item.path}.png`" -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col cols-3 cols-xs-12 second__box"></div>
    </div>
  </div>
</template>

<script>
import iamges from "@/assets/values/images.json";
export default {
  data: () => ({
    search: "",
    imageList: iamges.list
  })
};
</script>

<style scoped lang="scss">
@import "@/assets/styles/global/mediaQuery.scss";

.board__content {
  height: 74vh;
  .first__box {
    height: 100%;
    padding: 5px;
    .box__field {
      background: #01382b;
    }
    .box__actions {
      .actions__header {
        .header__buttons {
          display: flex;
          justify-content: space-between;
        }
        .button {
          @include md-down {
            width: 48px;
            height: 48px;
          }
          // @include sm-down {
          //   width: 24px;
          //   height: 24px;
          // }
          .image__box {
            width: 36px;
            // @include md-down {
            //   width: 24px;
            // }
          }
        }
      }
      .actions__content {
        background: #fefefe;
        border-radius: 12px;
        .content__search {
          border-top: solid 1px #ddd;
          padding: 10px;
          .input__slot {
            display: flex;
            align-items: center;
            .image__box {
              width: 36px;
              @include sm-down {
                width: 24px;
              }
              &.small {
                width: 24px;
                height: 24px;
              }
            }
            .input__field {
              width: 100%;
              margin: 0 8px;
              color: #666666;
              background: inherit;
              border: none;
              border-bottom: solid 1px #000;
              border-radius: 0;
              border-top-left-radius: 4px;
              border-top-right-radius: 4px;
            }
          }
        }
        .content__images {
          height: 68vh;
          overflow-y: scroll;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          .image__marks {
            width: 100px;
            height: 100px;
          }
        }
      }
    }
  }
  .second__box {
    background: skyblue;
  }
}
</style>
