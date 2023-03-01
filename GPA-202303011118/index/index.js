Page({
  data: {
    gpa: 0,
  },
  bindKeyInput: function (e) {

      const app=getApp();
      const scores=app.globalData.scores;
      const credits=app.globalData.credits;
      const name=e.currentTarget.dataset.name;
      const index=Number(name.replace(/[^0-9]/ig, ''));

      if(name[0]=='c')
         credits[index]=Number(e.detail.value);
      else{
        var score=Number(e.detail.value);
        scores[index]=score<60?0:(score-50)/10;
      }
  },
  calc: function (e) {

    const app=getApp();
    const scores=app.globalData.scores;
    const credits=app.globalData.credits;
    var creSum=0,scoreSum=0;

    for(var i=0,len=scores.length;i<len;i++)
    {
        creSum+=credits[i];
        scoreSum+=(scores[i]*credits[i]);
    }
    this.setData({
        gpa: scoreSum/creSum
      })
    }
})
