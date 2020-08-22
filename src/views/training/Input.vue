<template>
  <div class="board__container">
    <div class="board__content">
      <div class="first__box">
        <div class="box__field"></div>
        <div class="box__actions"></div>
      </div>
      <div class="second__box"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.board__container {
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;
  .board__content {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    // margin-right: -12px;
    // margin-left: -12px;
    height: 800px;
    .first__box {
      display: flex;
      flex-wrap: wrap;
      flex: 1 1 auto;
      background: hotpink;
      padding: 10px;
      flex: 0 0 70%;
      max-width: 70%;
      .box__field {
        flex: 0 0 70%;
        max-width: 70%;
        background: greenyellow;
      }
      .box__actions {
        flex: 0 0 30%;
        max-width: 30%;
        background: grey;
      }
    }
    .second__box {
      background: skyblue;
      flex: 0 0 25%;
      max-width: 25%;
    }
  }
}

/* 
   - xs : mobile
  - sm : ipad 세로 ( portrait )
  - md : ipad 가로 ( landscape ), ipad pro<12.9> 세로 ( portrait )  [ css - media query  ]
  - lg : mac 15, mac 13, ipad pro<12.9> 가로 ( landscape )
  - xl : desktop 
*/
$sm-breakpoint: 600px;
$md-breakpoint: 960px;
$lg-breakpoint: 1264px;
$xl-breakpoint: 1904px;

@media screen and (max-width: $sm-breakpoint - 1) {
  .board__container {
    .board__content {
      .first__box {
        flex: 0 0 100%;
        max-width: 100%;
        .box__field {
          flex: 0 0 100%;
          max-width: 100%;
        }
        .box__actions {
          flex: 0 0 100%;
          max-width: 100%;
        }
      }
      .second__box {
        flex: 0 0 100%;
        max-width: 100%;
      }
    }
  }
}

@media screen and (max-width: $md-breakpoint - 1) {
}
@media screen and (max-width: $lg-breakpoint - 1) {
}
@media screen and (max-width: $xl-breakpoint - 1) {
}
</style>
