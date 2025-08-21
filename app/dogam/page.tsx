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
    name: "김순자",
    nickname: "마을의 어머니",
    level: 73,
    bloodType: "A",
    favoriteSong: "고향의 봄",
    mbti: "ESFJ",
    story: "40년간 마을 이장을 맡으며 동네를 돌봐온 든든한 어머니",
    address: "점곡면 중리",
    zodiac: "황소자리",
    image: "/elderly-korean-woman-smiling.png",
    specialty: "김치 담그기",
    hobby: "텃밭 가꾸기",
  },
  {
    id: 2,
    name: "박철수",
    nickname: "마을 철학자",
    level: 68,
    bloodType: "B",
    favoriteSong: "아침이슬",
    mbti: "INFP",
    story: "젊은 시절 서울에서 교사로 일하다 고향으로 돌아온 지혜로운 할아버지",
    address: "점곡면 서리",
    zodiac: "물병자리",
    image: "/wise-korean-elder.png",
    specialty: "한시 짓기",
    hobby: "독서",
  },
  {
    id: 3,
    name: "이영희",
    nickname: "꽃할머니",
    level: 71,
    bloodType: "O",
    favoriteSong: "진달래꽃",
    mbti: "ISFP",
    story: "평생 꽃을 키우며 마을을 아름답게 가꿔온 예술가 할머니",
    address: "점곡면 동리",
    zodiac: "처녀자리",
    image: "/placeholder-qtyg6.png",
    specialty: "꽃꽂이",
    hobby: "정원 가꾸기",
  },
  {
    id: 4,
    name: "최만수",
    nickname: "마을 기술자",
    level: 75,
    bloodType: "AB",
    favoriteSong: "남촌",
    mbti: "ISTP",
    story: "손재주가 뛰어나 마을의 모든 고장난 것들을 고쳐주는 만능 할아버지",
    address: "점곡면 북리",
    zodiac: "사자자리",
    image: "/elderly-korean-man-fixing.png",
    specialty: "목공예",
    hobby: "라디오 수리",
  },
  {
    id: 5,
    name: "김창회",
    nickname: "사촌마을의 마지막 선비",
    level: 77,
    bloodType: "O",
    favoriteSong: "고향의 봄",
    mbti: "INFJ",
    story: "유교문화권 정비사업을 사랑방에서 시작한 사촌마을의 '살아있는 역사'.",
    address: "경상북도 의성군 사촌마을",
    zodiac: "황소자리",
    image: "/wise-korean-scholar.png",
    specialty: "유교 문화 전수",
    hobby: "사랑방 운영",
  },
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
