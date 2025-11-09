# Algorithms & Digital Image Processing Dashboard

An interactive **web dashboard** that brings together Design & Analysis of Algorithms (DAA) and Digital Image Processing (DIP) lab programs in one place.  

Everything runs in the browser – just open `index.html` and explore the experiments from a clean, professional UI.

<img width="1905" height="668" alt="image" src="https://github.com/user-attachments/assets/9b297b30-eb0f-42b3-8ff8-701a50af0cbb" />

---

## 🚀 Features

### 🧮 Algorithms Workspace (`algorithms/`)
Visual and interactive implementations of classic algorithms:

- **Knapsack Problem**
  - `knapsack_dp.html` – 0/1 Knapsack using Dynamic Programming  
  - `knapsack_greedy.html` – 0/1 Knapsack using Greedy approach  
  - `kanpsack_ga.html` – Knapsack solved with Genetic / Metaheuristic approach  

- **Travelling Salesman Problem (TSP)**
  - `tsp_bruteforce.html` – Brute-force TSP  
  - `TSP_branch_bound.html` – Branch and Bound TSP  
  - `TSP_ga.html` – Genetic Algorithm for TSP  

- **Coin Change**
  - `coin_changing_dp.html` – Coin Change using Dynamic Programming  
  - `coin_change_cashier.html` – Greedy / cashiers algorithm  

- **Huffman Coding**
  - `huffman_table.html` – Table-based Huffman coding  
  - `huffman_greedy.html` – Huffman tree via greedy merges  

- **Other Algorithms**
  - `Longest Common Subsequence.html` – LCS visualization  
  - `arithematic_encoding_and_decoding.html` – Arithmetic coding demo  
  - `cnn-classification.html` – Simple CNN classification front-end

> All these pages are loaded inside the dashboard via an `<iframe>` when you pick them from the sidebar.

---

### 🖼️ DIP Core Utilities (`DIP/`)

Digital Image Processing experiments focusing on intensity transforms, convolution and resizing:

- `contrast_stretching.html` – Contrast stretching
- `histogram_equa.html` – Histogram equalisation
- `convolution_padding.html` – Convolution with padding
- `image_matching.html` – Image matching demo
- `min_max_matching.html` – Min–max matching
- `resize_bilinear.html` – Bilinear image resizing
- `resize_nearest_neighbor.html` – Nearest-neighbour resizing

---

### 🎛️ Spatial Filters (`filters/`)

DIP spatial-domain filters, each in its own page:

- `spatial_filter.html` – General spatial filter (custom kernel)
- `average.html` – Mean / average filter
- `median.html` – Median filter
- `weighted_average_filter.html` – Weighted average filter
- `laplacian_enhancement.html` – Laplacian-based image enhancement

All of these are accessible from the **Filters** tab in the main dashboard.

---

## 🗂 Project Structure

```text
.
├── index.html               # Main dashboard (entry point)
├── algorithms/              # DAA experiments
│   ├── arithematic_encoding_and_decoding.html
│   ├── cnn-classification.html
│   ├── coin_change_cashier.html
│   ├── coin_changing_dp.html
│   ├── huffman_greedy.html
│   ├── huffman_table.html
│   ├── kanpsack_ga.html
│   ├── knapsack_dp.html
│   ├── knapsack_greedy.html
│   ├── Longest Common Subsequence.html
│   ├── TSP_branch_bound.html
│   ├── tsp_bruteforce.html
│   └── TSP_ga.html
├── DIP/                     # Core DIP utilities
│   ├── contrast_stretching.html
│   ├── convolution_padding.html
│   ├── histogram_equa.html
│   ├── image_matching.html
│   ├── min_max_matching.html
│   ├── resize_bilinear.html
│   └── resize_nearest_neighbor.html
└── filters/                 # Spatial filters
    ├── average.html
    ├── laplacian_enhancement.html
    ├── median.html
    ├── spatial_filter.html
    └── weighted_average_filter.html

Reference:
ChatGPT 5
