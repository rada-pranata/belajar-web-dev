const namaLengkap = "Rada Pranata";
const tahunLahir = 2002;
const tinggiBadan = 175;
const sudahBekerja = true;

console.log(namaLengkap);
console.log(tahunLahir);
console.log(tinggiBadan);
console.log(sudahBekerja);

const tahunSekarang = 2026;
const tahunKelahiran = 2002;
const umur = tahunSekarang - tahunKelahiran;
console.log(umur);

const suhuCelcius = 30;
const suhuFahreinheit = (suhuCelcius * 9) / 5 + 32;
console.log(suhuFahreinheit);

const angka = 15;

console.log(angka % 3);
console.log(angka % 5);

const punyaCukupUang = true;
const barangTersedia = true;
const tokoBuka = false;

console.log(punyaCukupUang && barangTersedia && tokoBuka);
console.log((punyaCukupUang && barangTersedia) || tokoBuka);
console.log(!tokoBuka);

console.log(5 === "5");
console.log(5 == "5");
console.log(typeof "5");
console.log(typeof 5);

const inputUser = "5";
const nominal = Number(inputUser);

if (nominal === 5) {
  console.log("cocok!");
}
