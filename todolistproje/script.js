let addTodoButton=document.getElementById('addTodo');
//document : web sayfasını temsil eder.
//getElementById: HTML nesnelerini yani etiketini seçmek için kullandık
//getElementsByName(name) name niteliği ile eşleşen tüm kayıtları dizi olarak  getirir.
//getElementsByClassName(classAdı) --- querySelector(seçici)
//querySelectorAll(seçici): seçici ile eşleşen tüm kayıtları dizi olarak getir.
//es6 ile gelen özellik let değişkeni ile tanımlandı
//var keyword’ü ile değişkenler tekrar tanımlanabilir ve değerleri güncellenebilir.
//let ile tanımlanan bir değişkeni tekrar tanımlayamayız ancak değerini güncelleyebiliriz.
let toDoContainer=document.getElementById('toDoContainer');
let inputText=document.getElementById("inputText");
let clearTodo=document.getElementById("clearTodo");



addTodoButton.addEventListener('click',function(){
//addEventListener: kullanıcı,tarayıcı veya olaylar bir sayfayı manüpule ettiğinde 
//addEventListener:kullanıcı bir düğmeyi tıkladığında olay gerçekleşmesi için yapılacak işlevi ayarlarız
//element.addEventListener(event, fonksiyon, useCapture)
//event olay(click,mousedown)türüdür.
//fonk olay tetiklendiğinde çağğırılan işlevdir
//usecapture olayın yaklama olup olmadığı boolen değeridir ture false alır

let paragraph=document.createElement("p");
paragraph.classList.add('paragraph-styling');
//html dom metodları olan createelement ve createtextnode
//html etiketi oluşturmak için kull
//createtextnode ise () içine metinler yazdırabilirsin

//classlist: domtokenlist nesnesi olarak döndürür
//css sınıfı ekler siler,geçiş efekti için kull.
//
toDoContainer.appendChild(paragraph);
//html elemanı oluşturulduktan snra belgeye eklemek için appendchild çocuğuna ekle  veya insertbefore metodu kullanılır
paragraph.innerHTML=inputText.value;
//innerHTML ekrana HTML nesnelerine yani etiketi içeriğini alır değiştirimek için 
//paragraftaki yazıyı al içeriğini yani valuesini aldık idsi inputtext
inputText.value="";
//boş hale getirir
paragraph.addEventListener('click',function(){
paragraph.style.textDecoration='line-through';
//metindeki biçimlendirmeleri ayarlamak veya kaldırmak için 
// üstünü çizmek(line-through) 
})
paragraph.addEventListener('dblclick',function(){
toDoContainer.removeChild(paragraph);
//sayfadaki html etiket veya nesneleri silmeye yarar
})

clearTodo.addEventListener('click',function(){
    paragraph.remove();
});






// paragrafı oluştur dedik 
//onu div in içine at
//inputtext deki yazdığını paragarafın içine aktar dedik
//en son da inputexti sıfırla dedik
})
