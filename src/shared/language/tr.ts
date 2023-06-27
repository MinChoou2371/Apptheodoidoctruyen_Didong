import LanguageInterface from './languageInterface';

export const tr: LanguageInterface = {
  // General
  done: 'Hoàn thành',
  cancel: 'Thoát',
  home: 'Trang chủ',
  search: 'Tìm kiếm',
  bookmark: 'Lưu trữ',
  profile: 'Hồ sơ',
  view_all: 'Xem tất cả',
  currently_reading: 'Đang đọc',
  favourite_list: 'Yêu thích',
  reviews: (score: number, scoredBy: number) =>
    `${score.toFixed(1)} / ${scoredBy} Tóm tắt`,
  settings: 'Cài đặt',

  // Onboarding
  onboarding_title_part1: 'Tìm truyện tiếp theo',
  onboarding_title_part2: 'Truyện hay',
  onboarding_start: 'Bắt đầu',

  // Home
  greeting: 'Xin chào, truyện manga nào phù hợp với tâm trạng hiện tại của bạn?',
  home_unfinished_manga: (date: string) =>
    `Hãy nhớ rằng bạn có một truyện chưa hoàn thành từ ${date}.`,

  // Search
  search_place_holder: 'Tìm kiếm truyện, nhân vật, hoặc tác giả',
  search_recent: 'Gần đây',
  search_clear_recent: 'Xóa tìm kiếm gần đây',
  genre_most_popular: 'Phổ biến nhất',

  // Bookmark
  recently_read: 'Đang đọc hiện tại',
  favourite_authors: 'Tác giả yêu thích',

  // Profile
  reading_finished: 'Đã đọc',
  theme: 'Chế độ',
  light_theme: 'Chế độ sáng',
  dark_theme: 'Chế độ tối',
  language: 'Ngôn ngữ',
  en: 'English',
  tr: 'Tiếng Việt',
  clear_all_data: 'Xóa tất cả dữ liệu',

  // Author Detail
  author_bio: 'Thông tin',
  author_works: 'Tác phẩm',

  // Manga Detail
  manga_ranked: (rank: number) => `Xếp Hạng #${rank}`,
  manga_popularity: (rank: number) => `Phổ biến #${rank}`,
  manga_members: (rank: number) => `Thành viên #${rank}`,
  manga_synopsis: 'Tóm tắt',
  characters: 'Nhân vật',
  manga_my_reading_status: 'Trạng thái đọc:',
  manga_start_reading: 'Bắt đầu đọc',
  manga_finish_reading: 'Kết thúc',
  manga_finished_reading: (date: string) => `Đã hoàn thành vào ${date}`,

  // Character Detail
  character_appearances: 'Xuất hiện',

  // Category
  top_mangas: 'Hàng đầu',

  // Modals
  chapter_select_title: 'Lựa chọn chương',
  chapter_select_description: 'Chọn chương cuối cùng bạn xem:',
  chapter_name_with_num: (chapter: number) => `Chương: ${chapter}`,
  theme_select_title: 'Chế độ',
  theme_select_description: 'Chọn chế độ sẽ được áp dụng trong toàn bộ ứng dụng.',
  language_select_description: 'Chọn ngôn ngữ được áp dụng trong toàn bộ ứng dụng.',
  system_default: 'Mặc định hệ thống',
  delete_data_warn_title: 'Xóa tất cả dữ liệu',
  delete_data_warn_description:
    'Bạn có chắc chắn muốn xóa tất cả dữ liệu của mình không?',
};