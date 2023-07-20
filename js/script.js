// Get references to HTML elements
const bmiForm = document.getElementById('bmiForm');
const resultDiv = document.getElementById('result');
const programDiv = document.getElementById('program')

// Add event listener for interaction that cause an action 
bmiForm.addEventListener('submit', calculateBMI);


// Calculate the BMI and display the result
function calculateBMI(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values from html
  const berat = parseFloat(document.getElementById('berat').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  const jeniskelamin = document.querySelector('input[name="jeniskelamin"]:checked').value;

  // Perform BMI calculation
  const tinggiInMeters = tinggi / 100;
  const bmi = berat / (tinggiInMeters * tinggiInMeters);

  // Determine BMI category based on gender,height adn weight
  var category = '';
  if (jeniskelamin === 'lakilaki') {
      if (bmi < 18.5) {
          category = 'Kekurangan Berat Badan';
      } else if (bmi < 25) {
          category = 'Normal';
      } else if (bmi < 30) {
          category = 'Kelebihan Berat Badan';
      } else {
          category = 'Obesitas';
      }
  } else if (jeniskelamin === 'perempuan') {
      if (bmi < 18.5) {
          category = 'Kekurangan Berat Badan';
      } else if (bmi < 24.9) {
          category = 'Normal';
      } else if (bmi < 29.9) {
          category = 'Kelebihan Berat Badan';
      } else {
          category = 'Obesitas';
      }
  }

  // Display result
  var resultElement = document.getElementById('result');
  resultElement.innerHTML = '<b>Your BMI is: ' + bmi.toFixed(2) + ' kg/m²' + '<br></b>';
  resultElement.innerHTML += '<b>Category: ' + category + '<br></b>';
  //Exercise program for each category
  var programElement = document.getElementById('program');
  if (category == 'Kekurangan Berat Badan'){
    programElement.innerHTML= 'Berat badan anda kurang ideal! Jalankanlah program yang dapat meningkatkan berat badan anda' + '<br>';
    programElement.innerHTML+= 'Program yang anda dapat jalankan adalah sebagai berikut : ' + '<br>';
    programElement.innerHTML+= '1.Pilih makanan sehat yang kaya akan nutrisi'+ '<br>'; //Source : https://www.alodokter.com/menambah-berat-badan-menjadi-lebih-ideal
    programElement.innerHTML+= 'Agar bisa menambah berat badan,Anda perlu mengonsumsi makanan bergizi seimbang, misalnya buah dan sayuran, kacang-kacangan, daging tanpa kulit atau lemak, tahu, tempe, telur, serta ikan.Jika perlu, Anda juga bisa mengonsumsi suplemen nutrisi tambahan sesuai anjuran dokter untuk mencukupi kebutuhan nutrisi dan menambah berat badan.' + '<br>';
    programElement.innerHTML+= '2. Makan lebih sering dengan porsi kecil</b>' + '<br>';
    programElement.innerHTML+= 'Seseorang yang kekurangan berat badan sering merasa cepat kenyang. Daripada makan 2 sampai 3 kali sehari dalam porsi besar, lebih baik makan dalam porsi lebih kecil tetapi sering.'+ '<br>';
    programElement.innerHTML+= '3. Konsumsi minuman padat kalori dan nutrisi' + '<br>';
    programElement.innerHTML+= 'Tidak hanya dari makanan, asupan nutrisi juga dapat diperoleh dari minuman padat kalori dan nutrisi, seperti susu, yoghurt, dan jus segar di sela waktu makan. Selain memenuhi kebutuhan cairan tubuh, Anda pun dapat terhindar dari dehidrasi.' + '<br>';
    programElement.innerHTML+= '4. Tambah asupan kalori' + '<br>';
    programElement.innerHTML+= 'Untuk menambah berat badan, Anda perlu tambahan asupan kalori dalam menu makan sehari-hari. Pilihlah sumber kalori tambahan yang sehat, misalnya dengan taburan keju parut pada roti, mentega pada tumisan, atau krim dan susu pada sup.' + '<br>';
    programElement.innerHTML+= '5. Rutin berolahraga' + '<br>';
    programElement.innerHTML+= 'Olahraga secara rutin tidak hanya dilakukan untuk menurunkan berat badan, tetapi juga menambah berat badan. Dengan rutin berolahraga, tubuh akan membentuk lebih banyak jaringan otot dan memangkas kelebihan lemak.Jika diikuti dengan pola makan sehat, rutin berolahraga bisa membantu Anda mencapai berat badan yang lebih ideal. Selain itu, olahraga juga bisa menambah nafsu makan sehingga asupan nutrisi dan kalori bisa meningkat.' + '<br>'; 


}else if (category == 'Normal'){
  programElement.innerHTML='Berat badan anda sudah ideal! Jalankanlah program yang mempertahankan berat badan anda' + '<br>'; 
  programElement.innerHTML+='Program yang anda dapat jalankan adalah sebagai berikut : ' + '<br>'; //Source : https://hellosehat.com/nutrisi/berat-badan-turun/menjaga-berat-badan-bagi-yang-hobi-makan/
  programElement.innerHTML+='1. Menyusun meal plan'+ '<br>';
  programElement.innerHTML+='Membuat catatan menu makanan yang akan Anda konsumsi bisa jadi langkah pertama cara menjaga berat badan ideal.Menulis meal plan juga dapat membantu Anda mengendalikan nafsu makan dan memilih sumber makanan tertentu dengan lebih hati-hati.Hal ini menjadi kunci dalam mempertahankan berat badna yang ideal' + '<br>';
  programElement.innerHTML+='2. Bergerak aktif atau olahraga' + '<br>';
  programElement.innerHTML+='Olahraga dapat membantu menjaga massa otot yang berperan penting selama pembakaran kalori dalam sistem metabolisme.Dengan berolahraga anda dapat menjaga berat badan anda agar tetap ideal' + '<br>';
  programElement.innerHTML+='3.Jangan melewatkan sarapan' + '<br>';
  programElement.innerHTML+='Sarapan atau makan pagi adalah salah satu faktor penting untuk mencegah pertambahan berat badan yang mungkin jarang disadari.Saat Anda merasa lapar di pagi hari karena melewatkan sarapan, biasanya timbul keinginan lebih kuat untuk mengonsumsi camilan yang sulit terkendali.Hasilnya, jumlah kalori yang masuk ke tubuh lebih banyak dan berat badan pun jadi lebih berisiko bertambah.Untuk itu, konsumsilah menu sarapan bergizi seimbang agar berat badan ideal tetap terjaga.' + '<br>';
  programElement.innerHTML+='4.Istirahat yang cukup'+ '<br>';
  programElement.innerHTML+='Tidur cukup adalah salah satu cara paling penting tak hanya untuk menjaga berat badan ideal, tetapi juga menjaga kesehatan secara keseluruhan.Kurang tidur akan cenderung membuat Anda jadi makan lebih banyak dan ngidam makanan tidak sehat pada pagi harinya.Oleh karena itu penuhilah tidur yang cukup dan jangan bergadang' + '<br>';
  programElement.innerHTML+='5.Penuhi kebutuhan cairan'+'<br>';
  programElement.innerHTML+='Jika ingin menjaga berat badan agar tetap ideal, memenuhi kebutuhan cairan adalah hal yang wajib dilakukan.Tubuh yang terdiri dari 60% memerlukan asupan cairan agar fungsi organ dapat bekerja secara normal.Selain itu, minum sekitar 1 sampai 2 gelas air sebelum makan dapat membuat Anda merasa kenyang sehingga secara tak langsung membantu mengendalikan nafsu makan berlebih.'

}else{
  programElement.innerHTML = 'Berat badan anda kurang ideal! Jalankanlah program yang dapat meningkatkan berat badan anda' + '<br>';
  programElement.innerHTML += 'Program yang anda dapat jalankan adalah sebagai berikut : ' + '<br>'; //Source : https://hellosehat.com/nutrisi/obesitas/cara-mengatasi-obesitas/
  programElement.innerHTML += '1. Mengatur pola makan' + '<br>';
  programElement.innerHTML += 'Salah satu cara mengatasi obesitas yang paling penting yakni mengatur kebiasaan makan. Pola makan yang tidak sehat merupakan penyebab kegemukan yang paling sering dialami oleh orang-orang.Akibatnya, penumpukan lemak terjadi dan bisa memicu kenaikan berat badan yang mungkin berujung pada obesitas.Oleh karena itu jagalah pola makan anda agar dapat menurunkan berat badan' + '<br>';
  programElement.innerHTML += '2. Berolahraga dan beraktivitas ' + '<br>';
  programElement.innerHTML += 'Anda perlu melakukan aktivitas intensitas sedang setidaknya 150 menit dalam seminggu. Hal ini bertujuan mencegah kenaikan berat badan atau untuk mempertahankan berat badan yang turun.Bila Anda ingin angka timbangan semakin turun, usahakan untuk berolahraga 300 menit atau lebih dalam seminggu. Anda bisa melakukannya secara bertahap dengan meningkatkan jumlah olahraga saat daya tahan dan kebugaran meningkat. ' + '<br>';
  programElement.innerHTML += '3. Minum air sebelum makan' + '<br>'; //Source : https://www.alodokter.com/7-cara-mudah-menurunkan-berat-badan
  programElement.innerHTML += 'Menurut penelitian, minum air sebelum makan bisa membantu menurunkan berat badan. Minum air sebelum makan dapat membuatmu lebih cepat merasa kenyang, sehingga keinginan untuk melahap makanan dalam jumlah banyak dapat berkurang.Terkadang rasa haus muncul menyerupai rasa lapar. Jadi saat mulai merasa lapar, daripada langsung makan, cobalah atasi dengan minum air putih terlebih dahulu. Dengan menerapkan cara ini, jumlah kalori yang kamu konsumsi saat makan juga bisa berkurang.' + '<br>';
  programElement.innerHTML += '4. Jangan lupa sarapan' + '<br>';
  programElement.innerHTML += 'Sarapan atau makan pagi adalah salah satu faktor penting untuk mencegah pertambahan berat badan yang mungkin jarang disadari.Saat Anda merasa lapar di pagi hari karena melewatkan sarapan, biasanya timbul keinginan lebih kuat untuk mengonsumsi camilan yang sulit terkendali.Hasilnya, jumlah kalori yang masuk ke tubuh lebih banyak dan berat badan pun jadi lebih berisiko bertambah.Untuk itu, konsumsilah menu sarapan bergizi seimbang agar berat badan ideal tetap terjaga.' + '<br>';
  programElement.innerHTML += '5.Tidur yang cukup' + '<br>';
  programElement.innerHTML +=  'Tidur cukup adalah salah satu cara paling penting tak hanya untuk menjaga berat badan ideal, tetapi juga menjaga kesehatan secara keseluruhan.Kurang tidur akan cenderung membuat Anda jadi makan lebih banyak dan ngidam makanan tidak sehat pada pagi harinya.Oleh karena itu penuhilah tidur yang cukup dan jangan bergadang' + '<br>';
}
    
}
