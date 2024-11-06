function Personal() {
  return null;
}

export default function PersonalInfo() {
  return (
    <section>
      <div className="container mx-auto p-2 text-center">
        <h2 className="text-3xl">PERSONAL INFO</h2>
      </div>

      {/* Menggunakan div untuk pemusatan konten menggunakan CSS */}
      <div className="text-center">
        <p>Nama                 : Marsheila Putri Kirana</p>
        <p>Tempat Tanggal Lahir : Sumedang, 26 Januari 2004</p>
        <p>Gender               : Perempuan</p>
        <p>Tinggi Badan         : 149 cm</p>
        <p>Berat Badan          : 43 kg</p>
        <p>Status Pernikahan    : Belum Menikah</p>
        <p>Whatsapp             : 089657065672</p>
        <p>Email                : marsheillaputri09@gmail.com</p>
      </div>
    </section>
  );
}
