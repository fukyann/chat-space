$(function(){

  function buildHTML(message){

    if ( message.image ) {
      var html =
      `
      <div class="message">
        <div class="chat-main__massage-list--name">
          ${message.user_name}
          <div class="chat-main__massage-list--name--deta">
            ${message.created_at}
          </div>
        </div>
        <p class="chat-main__massage-list--coment">
          ${message.content}
        </p>
        <img class="chat-main__massage-list--image" src=${message.image}>  
      </div>
      `
      return html;
    } else {
      var html =
      `
      <div class="message">
        <div class="chat-main__massage-list--name">
          ${message.user_name}
          <div class="chat-main__massage-list--name--deta">
            ${message.created_at}
          </div>
        </div>
        <p class="chat-main__massage-list--coment">
          ${message.content}
        </p>
      </div>
      `
      return html;
    }

  }

  $('#new_message').on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
      .done(function(data){
        var html = buildHTML(data);
        $('.chat-main__massage-list').append(html).animate({ scrollTop: $('.chat-main__massage-list')[0].scrollHeight});
        $('form')[0].reset();
        $(".chat-main__massage-from-submit").removeAttr("disabled");
      })
      .fail(function() {
        alert("メッセージ送信に失敗しました");
        $(".chat-main__massage-from-submit").removeAttr("disabled");
      }) 
  });
});