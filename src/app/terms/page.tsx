'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Scale, Clock, DollarSign, Users } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <img src="/logo.png" alt="MIFTAHU SHOLIKIHIN" className="h-10 w-auto mr-3" />
                <span className="text-xl font-bold text-green-800">MIFTAHU SHOLIKIHIN</span>
              </Link>
            </div>
            
            <div className="flex items-center">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Kembali
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Syarat dan Ketentuan
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Syarat dan Ketentuan layanan <span className="text-green-600 font-semibold">MIFTAHU SHOLIKIHIN</span> 
            untuk pembibitan dan budidaya kambing potong.
          </p>
        </div>

        <div className="space-y-8">
          {/* Acceptance of Terms */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Penerimaan Syarat
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Dengan menggunakan layanan pembibitan dan budidaya kambing potong dari MIFTAHU SHOLIKIHIN, 
                Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan 
                bagian mana pun dari syarat ini, jangan menggunakan layanan kami.
              </p>
              <p className="text-gray-700">
                Syarat dan Ketentuan ini berlaku untuk semua pelanggan, mitra bisnis, dan pengguna 
                layanan kami.
              </p>
            </CardContent>
          </Card>

          {/* Services Description */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Deskripsi Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Layanan yang Kami Sediakan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pembibitan kambing potong berkualitas tinggi</li>
                  <li>Budidaya kambing dengan standar kesehatan terbaik</li>
                  <li>Konsultasi teknis untuk peternakan kambing</li>
                  <li>Penjualan pakan ternak dan perlengkapan</li>
                  <li>Pelatihan dan pendampingan peternakan</li>
                  <li>Layanan pengiriman ke seluruh Indonesia</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Jenis Kambing:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Kambing Peranakan Etawa (PE)</li>
                  <li>Kambing Boer</li>
                  <li>Kambing Lokan</li>
                  <li>Kambing Jawarandu</li>
                  <li>Kambing Kacang</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Ordering and Payment */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-green-600" />
                Pemesanan dan Pembayaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Prosedur Pemesanan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pemesanan dapat dilakukan melalui telepon, WhatsApp, atau kunjungan langsung</li>
                  <li>Uang muka minimal 50% diperlukan untuk konfirmasi pemesanan</li>
                  <li>Pelunasan harus dilakukan sebelum pengiriman</li>
                  <li>Pemesanan minimal 3 hari sebelum pengiriman</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Metode Pembayaran:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Transfer bank (BCA, BRI, Mandiri)</li>
                  <li>Tunai (untuk pembelian langsung)</li>
                  <li>QRIS dan e-wallet</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  <strong>Catatan:</strong> Harga dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Delivery and Shipping */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green-600" />
                Pengiriman dan Pengantaran
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pengiriman hanya untuk area Jawa Timur dan Bali</li>
                  <li>Biaya pengiriman ditanggung pembeli</li>
                  <li>Pengiriman menggunakan kendaraan khusus ternak</li>
                  <li>Waktu pengiriman 1-3 hari tergantung lokasi</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Syarat Pengiriman:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Pembeli harus menyediakan dokumen lengkap</li>
                  <li>Lokasi pengiriman harus dapat diakses kendaraan</li>
                  <li>Pembeli wajib menunggu kedatangan pengiriman</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Quality Guarantee */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                Jaminan Kualitas
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Yang Kami Jamin:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Kambing sehat dan bebas penyakit</li>
                  <li>Sertifikat kesehatan dari dokter hewan</li>
                  <li>Usia dan berat sesuai spesifikasi</li>
                  <li>Vaksinasi lengkap</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Kebijakan Garansi:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Garansi 7 hari untuk penyakit menular</li>
                  <li>Penggantian jika kambing mati dalam masa garansi</li>
                  <li>Syarat garansi: perawatan sesuai anjuran</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Customer Responsibilities */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                Tanggung Jawab Pelanggan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pelanggan, Anda bertanggung jawab untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memberikan informasi yang akurat dan lengkap</li>
                <li>Memastikan lokasi pengiriman siap menerima ternak</li>
                <li>Merawat kambing sesuai petunjuk yang diberikan</li>
                <li>Melaporkan masalah kesehatan dalam 24 jam</li>
                <li>Mematuhi peraturan peternakan setempat</li>
                <li>Tidak melakukan penjualan kembali tanpa izin</li>
              </ul>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertCircle className="h-5 w-5 mr-2 text-green-600" />
                Pembatasan Tanggung Jawab
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                MIFTAHU SHOLIKIHIN tidak bertanggung jawab atas:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Kerugian yang disebabkan oleh kelalaian pelanggan</li>
                <li>Kematian akibat penyakit yang tidak terdeteksi saat pengiriman</li>
                <li>Kerusakan akibat transportasi pihak ketiga</li>
                <li>Kehilangan produktivitas akibat faktor eksternal</li>
                <li>Kerugian tidak langsung atau konsekuensial</li>
              </ul>
            </CardContent>
          </Card>

          {/* Dispute Resolution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Scale className="h-5 w-5 mr-2 text-green-600" />
                Penyelesaian Sengketa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Prosedur Penyelesaian:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Diskusi dan negosiasi antara kedua belah pihak</li>
                  <li>Mediasi dengan pihak ketiga netral</li>
                  <li>Penyelesaian melalui pengadilan negeri Banyuwangi</li>
                </ul>
              </div>
              
              <p className="text-gray-700">
                Semua sengketa akan diselesaikan sesuai dengan hukum yang berlaku di Republik Indonesia.
              </p>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Hak Kekayaan Intelektual
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Semua konten, merek, dan materi milik MIFTAHU SHOLIKIHIN dilindungi oleh hukum 
                hak kekayaan intelektual. Penggunaan tanpa izin dilarang keras.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Hubungi Kami
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Untuk pertanyaan atau klarifikasi tentang Syarat dan Ketentuan ini, silakan hubungi:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800">MIFTAHU SHOLIKIHIN</p>
                <p className="text-gray-700">Dusun Krajan RT 01/RW 05, Desa Plampangrejo</p>
                <p className="text-gray-700">Kec. Cluring, Kab. Banyuwangi, Jawa Timur 68482</p>
                <p className="text-gray-700">Telepon: +6282261682735</p>
                <p className="text-gray-700">Email: info@miftahusholikihin.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Terms Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Pembaruan Syarat dan Ketentuan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami berhak mengubah Syarat dan Ketentuan ini sewaktu-waktu. Perubahan akan 
                diberitahukan melalui website atau komunikasi langsung. Penggunaan layanan kami 
                setelah pembaruan berarti Anda menyetujui syarat yang baru.
              </p>
              <p className="text-gray-700">
                Syarat dan Ketentuan ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID')}
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/logo.png" alt="MIFTAHU SHOLIKIHIN" className="h-8 w-auto mr-2" />
            <span className="text-lg font-bold">MIFTAHU SHOLIKIHIN</span>
          </div>
          <p className="text-gray-400 mb-4">
            Pembibitan dan Budidaya Kambing Potong Terpercaya
          </p>
          <div className="space-x-4">
            <Link href="/" className="text-gray-400 hover:text-white">Beranda</Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-400 hover:text-white">Terms and Conditions</Link>
          </div>
          <p className="text-gray-400 mt-4">
            &copy; 2024 MIFTAHU SHOLIKIHIN. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}