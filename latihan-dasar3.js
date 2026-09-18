// soal No.1
const hargaAwal = 20000;
const persenDiskon = 15;
const nilaiDiskon = hargaAwal * (persenDiskon / 100);
const hargaAkhir = hargaAwal - nilaiDiskon;

console.log(nilaiDiskon);
console.log(hargaAkhir);

// soal No.2
const totalDetik = 3725;
const jam = Math.floor(totalDetik / 3600);
const sisaDetikSetelahJam = totalDetik % 3600;
const menit = Math.floor(sisaDetikSetelahJam / 60);
const detik = sisaDetikSetelahJam % 60;

console.log(jam);
console.log(menit);
console.log(detik);

// soal No.3
const angka = -5;

console.log(angka > 0); // false
console.log(angka < 0); // true
console.log(angka === 0); // false

// soal No.4
let counter = 10;
counter++;
console.log(counter);

counter--;
console.log(counter);
counter--;
console.log(counter);

// soal No.5
console.log(5 + 3); // 8
console.log("5" + 3); // 53
console.log("5" + "3"); // 53
console.log(5 + 3 + "2"); //82
console.log("2" + 5 + 3); // 253

// soal No.6
const nilai = 45;
const status = nilai >= 60 ? "Lulus" : "Tidak Lulus";
console.log(status);
