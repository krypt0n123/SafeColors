# [SafeColors](https://safe-colors.vercel.app/) 

[English Document](README.md) | [中文文档](README_zh.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/yourusername/safecolors/pulls)

Smart Address Coloring System - Securing cryptocurrency transactions through visual cryptography

## Project Overview

[SafeColors](https://safe-colors.vercel.app/) is an innovative address security verification tool. By adding unique color combinations to user addresses through encryption algorithms, this tool can effectively prevent the following risks:

- ✅ Phishing attacks using similar addresses
- ✅ Human verification errors
- ✅ Malicious address substitution

<p align="center">
  <img src="./public/example.png" alt="new" width="500" style="border-radius: 6px";/>
  <br>
</p>

### The principle of wallet address dyeing algorithm


#### 1.   Hash generation
- Perform the SHA-256 encryption hash operation on the target wallet address to generate a hexadecimal string of a fixed length
#### 2.   Segment coding
- Take the first 48 hash values and split them into 8 groups in sequence, with each group containing 6 consecutive hexadecimal characters
#### 3.   Color mapping
- Parse each group of 6-digit characters into RGB color values (format: #RRGGBB), and generate 8 corresponding standard hexadecimal color codes
#### 4.   Dynamic rendering
- Based on the generated color sequence, the wallet address characters are colored to achieve address coloring
<p align="center">
  <img src="./public/flowchart.png" alt="new" width="600" style="border-radius: 6px;"/><br>
</p>

### Homepage
- https://safe-colors.vercel.app/