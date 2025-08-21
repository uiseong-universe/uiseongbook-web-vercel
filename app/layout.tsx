import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Book } from "lucide-react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "의성도감 - 청년개발자들의 의성 살아보기",
  description: "지역 어르신들의 삶과 이야기를 포켓몬처럼 기록하여 세대 간 소통의 다리를 놓는 특별한 프로젝트",
  keywords: "의성, 도감, 청년개발자, 지역활성화, 세대소통, Us:Code",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* Navigation */}
        <nav className="bg-white/90 backdrop-blur-sm border-b border-orange-200 sticky top-0 z-40">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-orange-500">
                의성도감
              </Link>
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-500">
                    <Home className="h-4 w-4 mr-2" />홈
                  </Button>
                </Link>
                <Link href="/dogam">
                  <Button variant="ghost" size="sm" className="text-gray-600 hover:text-orange-500">
                    <Book className="h-4 w-4 mr-2" />
                    도감
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-orange-400">의성도감</h3>
                <p className="text-gray-300 leading-relaxed">
                  청년개발자들이 의성에서 한 달간 살아보며 지역 어르신들의 이야기를 기록하는 특별한 프로젝트
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">프로젝트 정보</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>주최: Us:Code</li>
                  <li>기간: 2025.8.4 ~ 8.29</li>
                  <li>장소: 경북 의성군 점곡면</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 text-orange-400">연락처</h4>
                <p className="text-gray-300">
                  청년개발자 아카데미 1기
                  <br />
                  의성도감 프로젝트팀
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2025 Us:Code 청년개발자 아카데미. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
