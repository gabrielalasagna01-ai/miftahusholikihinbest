'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Database, UserCheck, Lock, FileText } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
            Kebijakan Privasi
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kebijakan Privasi <span className="text-green-600 font-semibold">MIFTAHU SHOLIKIHIN</span> 
            menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda.
          </p>
        </div>

        <div className="space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Pendahuluan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Selamat datang di MIFTAHU SHOLIKIHIN. Kami sangat memperhatikan privasi dan keamanan 
                data pribadi Anda. Kebijakan Privasi ini berlaku untuk semua layanan yang kami 
                sediakan, termasuk pembibitan dan budidaya kambing potong.
              </p>
              <p className="text-gray-700">
                Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi 
                sesuai dengan kebijakan ini.
              </p>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="h-5 w-5 mr-2 text-green-600" />
                Pengumpulan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Informasi yang Kami Kumpulkan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Nama lengkap dan informasi identitas</li>
                  <li>Nomor telepon dan alamat email</li>
                  <li>Alamat lengkap untuk pengiriman</li>
                  <li>Informasi pembayaran dan transaksi</li>
                  <li>Riwayat pembelian dan komunikasi</li>
                  <li>Preferensi layanan dan produk</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cara Pengumpulan:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Formulir pendaftaran online</li>
                  <li>Komunikasi langsung (telepon, email, WhatsApp)</li>
                  <li>Kunjungan ke lokasi kami</li>
                  <li>Transaksi pembelian</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Eye className="h-5 w-5 mr-2 text-green-600" />
                Penggunaan Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami menggunakan informasi yang Anda berikan untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Memproses dan menyelesaikan transaksi pembelian</li>
                <li>Memberikan layanan konsultasi dan dukungan teknis</li>
                <li>Mengirimkan informasi produk dan penawaran khusus</li>
                <li>Meningkatkan kualitas layanan kami</li>
                <li>Menangani pertanyaan dan keluhan pelanggan</li>
                <li>Memenuhi kewajiban hukum dan peraturan</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Protection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-600" />
                Perlindungan Data
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami berkomitmen untuk melindungi informasi pribadi Anda dengan:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Enkripsi data saat transmisi dan penyimpanan</li>
                <li>Akses terbatas untuk informasi sensitif</li>
                <li>Sistem keamanan yang terupdate secara berkala</li>
                <li>Pelatihan staf tentang perlindungan data</li>
                <li>Audit keamanan rutin</li>
              </ul>
            </CardContent>
          </Card>

          {/* User Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <UserCheck className="h-5 w-5 mr-2 text-green-600" />
                Hak Anda sebagai Pengguna
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Sebagai pengguna layanan kami, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Mengakses dan melihat informasi pribadi Anda</li>
                <li>Memperbaiki informasi yang tidak akurat</li>
                <li>Menghapus informasi pribadi (dengan syarat dan ketentuan)</li>
                <li>Menolak pemasaran langsung</li>
                <li>Meminta salinan data pribadi Anda</li>
                <li>Mengajukan keluhan tentang penanganan data</li>
              </ul>
            </CardContent>
          </Card>

          {/* Data Sharing */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lock className="h-5 w-5 mr-2 text-green-600" />
                Berbagi Informasi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada 
                pihak ketiga tanpa persetujuan Anda, kecuali:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Diperlukan untuk penyediaan layanan (mitra pengiriman, dll)</li>
                <li>Memenuhi kewajiban hukum atau perintah pengadilan</li>
                <li>Melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                <li>Dengan persetujuan eksplisit dari Anda</li>
              </ul>
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
                Jika Anda memiliki pertanyaan atau kekhawatiran tentang Kebijakan Privasi kami, 
                silakan hubungi:
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-semibold text-green-800">MIFTAHU SHOLIKIHIN</p>
                <p className="text-gray-700">Dusun Krajan RT 01/RW 05, Desa Plampangrejo</p>
                <p className="text-gray-700">Kec. Cluring, Kab. Banyuwangi, Jawa Timur 68482</p>
                <p className="text-gray-700">Telepon: +6282261682735</p>
                <p className="text-gray-700">Email: privacy@miftahusholikihin.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Policy Updates */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-green-600" />
                Pembaruan Kebijakan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan 
                diberitahukan melalui website atau komunikasi langsung. Penggunaan layanan kami 
                setelah pembaruan berarti Anda menyetujui kebijakan yang baru.
              </p>
              <p className="text-gray-700">
                Kebijakan Privasi ini terakhir diperbarui pada: {new Date().toLocaleDateString('id-ID')}
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