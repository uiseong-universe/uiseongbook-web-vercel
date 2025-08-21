"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Heart, MapPin, Music, Star, Search } from "lucide-react"
import Image from "next/image"

// 샘플 데이터
const sampleResidents = [
  {
    id: 1,
    name: "김창회",
    nickname: "사촌마을의 마지막 선비",
    level: 86,
    bloodType: "O", // 온화하고 사교적인 면, 강의와 소통을 즐기는 모습에서 상상
    favoriteSong: "고향의 봄", // 세대·성향에 맞춰 추정
    mbti: "INFJ", // 이상주의자형, 깊이 있는 대화와 가치관 중심
    story: "유교문화권 정비사업을 사랑방에서 시작한 사촌마을의 '살아있는 역사'.",
    address: "경상북도 의성군 사촌마을",
    zodiac: "황소자리", // 4~5월생 가정 → 우직하고 인내심 강한 성향
    image: "/wise-korean-scholar.png",
    specialty: "유교 문화 전수",
    hobby: "사랑방 운영",
  },
  {
    id: 2,
    name: "김아이자",
    nickname: "사촌마을의 억척 구멍가게 주인",
    level: 77,
    bloodType: "A", // 성실·책임감·봉사정신 반영
    favoriteSong: "굳세어라 금순아", // 전쟁세대 공감대 있는 노래
    mbti: "ISFJ", // 헌신적·가족과 공동체를 책임지는 성향
    story: "52년 동안 구멍가게를 지키며 6남매를 키워낸 의성의 강인한 어머니.",
    address: "경상북도 의성군 사촌마을",
    zodiac: "염소자리", // 책임감과 인내의 상징
    image: "elderly-korean-woman-smiling.png",
    specialty: "가족 부양과 공동체 봉사",
    hobby: "구멍가게 운영과 이웃 돌보기"
  },
  {
    id: 3,
    name: "황재윤",
    nickname: "의성의 불굴 농부",
    level: 58,
    bloodType: "B", // 추진력·도전정신·끈기 반영
    favoriteSong: "바위처럼", // 어려움을 극복하는 삶과 잘 맞는 노래
    mbti: "ESTJ", // 책임감·리더십·실행력 중심
    story: "쌀값 투쟁으로 ‘실명사건’의 주인공이 되었고, 사슴농장과 마을회관 건립으로 의성 공동체를 일으킨 젊은 농부.",
    address: "경상북도 의성군 점곡면 송내리",
    zodiac: "사자자리", // 강한 리더십과 도전 정신을 상징
    image: "/star-hwang.png",
    specialty: "사슴 사육·농민회 활동·지역 리더십",
    hobby: "마을회관 운영, 지역 축구 경기 관람"
  },
  {
    id: 4,
    name: "박정기",
    nickname: "전쟁터의 억척 장사꾼",
    level: 80,
    bloodType: "A", // 책임감 강하고 성실한 모습에서 추정
    favoriteSong: "이별의 부산정거장", // 1950년대 대중가요 추정
    mbti: "ESTJ", // 현실적이고 실행력 강한 성향
    story: "6.25 전쟁 속 미군부대에서 물건을 받아 장사하며 가족의 생계를 책임진 강인한 여성.",
    address: "경상북도 의성군",
    zodiac: "게자리", // 6~7월생 가정 → 가족 중심적 성향 반영
    image: "/doctor-park.png",
    specialty: "장사 수완",
    hobby: "동생들 돌보기"
  }
]

export default function DogamPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedResident, setSelectedResident] = useState(null)

  const filteredResidents = sampleResidents.filter(
    (resident) =>
      resident.name.includes(searchTerm) ||
      resident.nickname.includes(searchTerm) ||
      resident.address.includes(searchTerm),
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">의성도감</h1>
          <p className="text-center text-orange-100 text-lg">의성 어르신들의 특별한 이야기를 만나보세요</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="이름, 별명, 지역으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-400"
            />
          </div>
        </div>

        {/* Residents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredResidents.map((resident) => (
            <Card
              key={resident.id}
              className="hover:shadow-xl transition-all duration-300 cursor-pointer border-orange-200 hover:border-orange-400 bg-white/80 backdrop-blur-sm"
              onClick={() => setSelectedResident(resident)}
            >
              <CardHeader className="text-center pb-2">
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={resident.image || "/placeholder.svg"}
                    alt={resident.name}
                    fill
                    className="rounded-full object-cover border-4 border-orange-200"
                  />
                  <div className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                    {resident.level}
                  </div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">{resident.name}</h3>
                <p className="text-xl md:text-2xl text-orange-600 font-medium">"{resident.nickname}"</p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between text-lg md:text-xl">
                  <span className="text-lg md:text-xl text-gray-700 font-medium">레벨</span>
                  <Badge variant="outline" className="border-orange-300 text-orange-600">
                    {resident.level}세
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-lg md:text-xl">
                  <span className="text-lg md:text-xl text-gray-700 font-medium">혈액형</span>
                  <Badge variant="outline" className="border-red-300 text-red-600">
                    {resident.bloodType}형
                  </Badge>
                </div>
                <div className="flex items-center justify-between text-lg md:text-xl">
                  <span className="text-lg md:text-xl text-gray-700 font-medium">MBTI</span>
                  <Badge variant="outline" className="border-pink-300 text-pink-600">
                    {resident.mbti}
                  </Badge>
                </div>
                <div className="flex items-center space-x-2 text-lg md:text-xl text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{resident.address}</span>
                </div>
                <div className="flex items-center space-x-2 text-lg md:text-xl text-gray-600">
                  <Music className="h-4 w-4" />
                  <span>{resident.favoriteSong}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resident Detail Modal */}
        {selectedResident && (
          <div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedResident(null)}
          >
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <CardHeader className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4">
                  <Image
                    src={selectedResident.image || "/placeholder.svg"}
                    alt={selectedResident.name}
                    fill
                    className="rounded-full object-cover border-4 border-orange-200"
                  />
                  <div className="absolute -top-2 -right-2 bg-orange-400 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                    {selectedResident.level}
                  </div>
                </div>
                <h2 className="text-5xl md:text-6xl font-bold text-gray-800">{selectedResident.name}</h2>
                <p className="text-2xl md:text-3xl text-orange-600 font-medium">"{selectedResident.nickname}"</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <p className="text-lg md:text-xl text-gray-600 mb-1">레벨</p>
                    <Badge className="bg-orange-100 text-orange-600 border-orange-300 text-base md:text-lg">
                      {selectedResident.level}세
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-lg md:text-xl text-gray-600 mb-1">혈액형</p>
                    <Badge className="bg-red-100 text-red-600 border-red-300 text-base md:text-lg">
                      {selectedResident.bloodType}형
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-lg md:text-xl text-gray-600 mb-1">MBTI</p>
                    <Badge className="bg-pink-100 text-pink-600 border-pink-300 text-base md:text-lg">
                      {selectedResident.mbti}
                    </Badge>
                  </div>
                  <div className="text-center">
                    <p className="text-lg md:text-xl text-gray-600 mb-1">별자리</p>
                    <Badge className="bg-purple-100 text-purple-600 border-purple-300 text-base md:text-lg">
                      {selectedResident.zodiac}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-xl md:text-2xl text-gray-800 mb-2 flex items-center">
                      <Music className="h-4 w-4 mr-2 text-orange-500" />
                      애창곡
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 bg-orange-50 p-3 rounded-lg">
                      {selectedResident.favoriteSong}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl md:text-2xl text-gray-800 mb-2 flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-red-500" />
                      주소
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 bg-red-50 p-3 rounded-lg">
                      {selectedResident.address}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl md:text-2xl text-gray-800 mb-2 flex items-center">
                      <Star className="h-4 w-4 mr-2 text-pink-500" />
                      특기
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 bg-pink-50 p-3 rounded-lg">
                      {selectedResident.specialty}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl md:text-2xl text-gray-800 mb-2 flex items-center">
                      <Heart className="h-4 w-4 mr-2 text-purple-500" />
                      취미
                    </h4>
                    <p className="text-lg md:text-xl text-gray-600 bg-purple-50 p-3 rounded-lg">
                      {selectedResident.hobby}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-xl md:text-2xl text-gray-800 mb-2">라떼는 이야기</h4>
                    <p className="text-xl md:text-2xl text-gray-600 bg-gray-50 p-4 rounded-lg leading-loose">
                      {selectedResident.story}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => setSelectedResident(null)}
                  className="text-xl w-full bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500"
                >
                  닫기
                </Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
