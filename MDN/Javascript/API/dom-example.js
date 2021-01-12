const link = document.querySelector('a');
link.textContent = 'Mozilla Developer Network';
link.href = "https://developer.mozilla.org";

const sect = document.querySelector('section');
const para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride';
sect.appendChild(para);
const text = document.createTextNode(' — the premier source for web development knowledge.');
const linkPara = document.querySelector('p');
linkPara.appendChild(text);

// 요소 이동 및 제거
//sect.appendChild(linkPara);
//sect.removeChild(linkPara); // 제거 할 노드와 그 부모에 대한 참조가 있을 때 노드를 제거
// 자신에 대한 참조만을 기반으로 노드를 제거하고 싶을 떄
//linkPara.remove(); // 이전 브라우저에서는 지원안됨
//linkPara.parentNode.removeChild(linkPara); // 이 방법으로 사용해야 함

// 스타일 조작 (in js)
// para.style.color = 'white';
// para.style.backgroundColor = 'black';
// para.style.padding = '10px';
// para.style.width = '250px';
// para.style.textAlign = 'center';
