<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Baidu translate API</h1>
    <input
        type="text"
        class="form-control"
        placeholder="Enter the en to translate"
        v-model="translateSrc"
    >
    <br/>
    <button class="btn btn-primary" @click="translate()">Translate</button>
    <div class="quote-area" v-if="translateDst">
      <h2><blockquote>Translate result: {{ translateDst }}</blockquote></h2>      
    </div>
    <div class="quote-area" v-if="errorMsg">
      <h2><blockquote>error Msg: {{ errorMsg }}</blockquote></h2>      
    </div>
  </div>
</template>

<script>

export default {

  data() {
    return {
      translateSrc: '',
      translateDst: '',
      errorMsg: ''
    }
  },

  methods: {
    translate() {
      if (this.translateSrc === '') {
        this.errorMsg = '请输入需要翻译的内容。';
      } else {
        this.errorMsg = '';
      }

      this.$http
        .get('http://apis.baidu.com/apistore/tranlateservice/translate?query='+encodeURIComponent(this.translateSrc)+'&from=en&to=zh', (data) => {
          if (data && data.retData && data.retData.trans_result) {
            let result = data.retData.trans_result[0];
            console.log(result.src);
            this.translateDst = result.dst;
          }
        }, { 
          headers: {
            'apikey': '3f3fb0c207feedf9169bfa0f18dc78b2'
          }
        })
        .error((err) => {
          if (err) {
            console.log(err);
            this.errorMsg = err;
          }
        })
    }
  }

}
</script>