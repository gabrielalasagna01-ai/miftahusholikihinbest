'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Phone, Mail, MapPin, Users, Award, Heart, Sprout, Shield, ChevronRight, Menu, X } from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img src="/logo.png" alt="MIFTAHU SHOLIKIHIN" className="h-10 w-auto mr-3" />
                <span className="text-xl font-bold text-green-800">MIFTAHU SHOLIKIHIN</span>
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-green-600 transition-colors">Beranda</a>
              <a href="#tentang" className="text-gray-700 hover:text-green-600 transition-colors">Tentang</a>
              <a href="#layanan" className="text-gray-700 hover:text-green-600 transition-colors">Layanan</a>
              <a href="#kontak" className="text-gray-700 hover:text-green-600 transition-colors">Kontak</a>
              <a href="/privacy" className="text-gray-700 hover:text-green-600 transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-700 hover:text-green-600 transition-colors">Terms</a>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-gray-700 hover:text-green-600">Beranda</a>
              <a href="#tentang" className="block px-3 py-2 text-gray-700 hover:text-green-600">Tentang</a>
              <a href="#layanan" className="block px-3 py-2 text-gray-700 hover:text-green-600">Layanan</a>
              <a href="#kontak" className="block px-3 py-2 text-gray-700 hover:text-green-600">Kontak</a>
              <a href="/privacy" className="block px-3 py-2 text-gray-700 hover:text-green-600">Privacy</a>
              <a href="/terms" className="block px-3 py-2 text-gray-700 hover:text-green-600">Terms</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Pembibitan & Budidaya
              <span className="text-green-600"> Kambing Potong</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              MIFTAHU SHOLIKIHIN - Solusi terpercaya untuk pembibitan kambing potong berkualitas tinggi. 
              Menghasilkan bibit unggul dengan standar kesehatan terbaik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                Hubungi Kami
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-600 text-green-600 hover:bg-green-50">
                Lihat Layanan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Kualitas Unggul</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Bibit kambing dengan kualitas terbaik dan sehat</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Bergaransi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Jaminan kesehatan dan kualitas untuk setiap bibit</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Konsultasi Gratis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pendampingan teknis untuk budidaya yang sukses</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-lg">Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Pelayanan terbaik dan kepuasan pelanggan prioritas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Tentang <span className="text-green-600">MIFTAHU SHOLIKIHIN</span>
              </h2>
              <p className="text-gray-600 mb-4">
                Kami adalah usaha pembibitan dan budidaya kambing potong yang berlokasi di Banyuwangi, 
                Jawa Timur. Dengan pengalaman bertahun-tahun, kami telah menjadi mitra terpercaya bagi 
                peternak di seluruh Indonesia.
              </p>
              <p className="text-gray-600 mb-6">
                Fokus kami adalah menyediakan bibit kambing potong berkualitas tinggi dengan standar 
                kesehatan yang ketat, didukung oleh tim ahli yang berpengalaman dalam bidang 
                peternakan kambing.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Sprout className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Bibit Unggul</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Berpengalaman</span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Bergaransi</span>
                </div>
                <div className="flex items-center">
                  <Heart className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700">Terpercaya</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Informasi Kontak</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-600">Dusun Krajan RT 01/RW 05, Desa Plampangrejo, Kec. Cluring, Kab. Banyuwangi, Jawa Timur 68482</span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-600">+6282261682735</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-600">info@miftahusholikihin.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Layanan <span className="text-green-600">Unggulan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan terbaik untuk mendukung kesuksesan budidaya kambing potong Anda
            </p>
          </div>

          <Tabs defaultValue="pembibitan" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="pembibitan">Pembibitan</TabsTrigger>
              <TabsTrigger value="budidaya">Budidaya</TabsTrigger>
              <TabsTrigger value="konsultasi">Konsultasi</TabsTrigger>
            </TabsList>
            
            <TabsContent value="pembibitan" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Bibit Kambing PE</CardTitle>
                    <CardDescription>Kambing Peranakan Etawa berkualitas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Bibit kambing PE dengan genetik unggul, sehat, dan produktif.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Bibit Kambing Boer</CardTitle>
                    <CardDescription>Kambing Boer impor berkualitas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Bibit kambing Boer dengan pertumbuhan cepat dan kualitas daging superior.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Bibit Kambing Lokal</CardTitle>
                    <CardDescription>Kambing lokal unggulan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Bibit kambing lokal yang sudah terbukti adaptif dan produktif.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="budidaya" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Pakan Ternak</CardTitle>
                    <CardDescription>Nutrisi optimal untuk pertumbuhan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Pakan ternak berkualitas dengan formulasi khusus untuk kambing potong.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Manajemen Kandang</CardTitle>
                    <CardDescription>Kandang sehat dan nyaman</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Desain dan manajemen kandang modern untuk kesehatan ternak optimal.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Kesehatan Ternak</CardTitle>
                    <CardDescription>Vaksinasi dan perawatan rutin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Program kesehatan preventif untuk menjaga kesehatan ternak.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="konsultasi" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Konsultasi Teknis</CardTitle>
                    <CardDescription>Pendampingan ahli</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Konsultasi dengan tim ahli untuk optimalisasi budidaya.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Pelatihan</CardTitle>
                    <CardDescription>Workshop peternakan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Pelatihan intensif tentang teknik budidaya kambing modern.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-green-600">Support 24/7</CardTitle>
                    <CardDescription>Bantuan kapan saja</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Layanan support 24 jam untuk membantu kendala teknis Anda.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Siap Memulai Budidaya Kambing Potong?
          </h2>
          <p className="text-green-100 mb-8 max-w-2xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan bibit kambing berkualitas dan konsultasi gratis 
            untuk kesuksesan bisnis peternakan Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              <Phone className="mr-2 h-5 w-5" />
              +6282261682735
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-700">
              <Mail className="mr-2 h-5 w-5" />
              Kirim Email
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <img src="/logo.png" alt="MIFTAHU SHOLIKIHIN" className="h-8 w-auto mr-2" />
                <span className="text-lg font-bold">MIFTAHU SHOLIKIHIN</span>
              </div>
              <p className="text-gray-400">
                Pembibitan dan Budidaya Kambing Potong Terpercaya di Banyuwangi, Jawa Timur
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Pembibitan Kambing</li>
                <li>Budidaya Kambing Potong</li>
                <li>Konsultasi Teknis</li>
                <li>Pakan Ternak</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Plampangrejo, Cluring, Banyuwangi
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  +6282261682735
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  info@miftahusholikihin.com
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MIFTAHU SHOLIKIHIN. All rights reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="/privacy" className="hover:text-white">Privacy Policy</a>
              <a href="/terms" className="hover:text-white">Terms and Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}