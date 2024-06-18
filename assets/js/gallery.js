function scrollToTargetPosition(targetY) {
    // Kiểm tra xem targetY có phải là một số hợp lệ hay không
    if (typeof targetY !== 'number') {
      return;
    }
  
    window.scrollTo({
      top: targetY,
      behavior: 'smooth'
    });
  }
  
  const viewPackageButton = document.querySelector('.nutview');
  
  // Gọi hàm scrollToTargetPosition với tọa độ y mong muốn khi nhấp nút
  viewPackageButton.addEventListener('click', () => {
    scrollToTargetPosition(2350); // Thay thế 'yourTargetY' bằng tọa độ y thực tế
  });
  



  // scroll anh hien ra
  


