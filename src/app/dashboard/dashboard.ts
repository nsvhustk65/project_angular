import { Component, AfterViewInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Bar Chart
    new Chart('barChart', {
      type: 'bar',
      data: {
        labels: ['Sản phẩm', 'Danh mục', 'Người dùng'],
        datasets: [{
          label: 'Thống kê',
          data: [120, 8, 25],
          backgroundColor: ['#0984e3', '#00b894', '#fdcb6e']
        }]
      }
    });

    // Pie Chart
    new Chart('pieChart', {
      type: 'pie',
      data: {
        labels: ['Sản phẩm', 'Danh mục', 'Người dùng'],
        datasets: [{
          data: [120, 8, 25],
          backgroundColor: ['#0984e3', '#00b894', '#fdcb6e']
        }]
      }
    });
  }
}
