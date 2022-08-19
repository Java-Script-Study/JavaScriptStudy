const pw = "124";
if(pw.length < 4){
    console.log("비밀번호는 최소 4자리 이상 입력해주세요.");
}

const email = "test!naver.com";
if(email.includes("@") === false){
    console.log("올바른 이메일 형식이 아닙니다.");
}