'use client'

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function RegistryTable() {
  const [registryData, setRegistryData] = useState([]);

  useEffect(() => {
    const fetchRegistryData = async () => {
      try {
        const response = await axios.get('/api/registry'); 
        setRegistryData(response.data);
      } catch (error) {
        console.error('Error fetching registry data:', error);
      }
    };

    fetchRegistryData();
  }, []);

  return (
    <section className="container mx-auto p-6 font-mono">
    <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full overflow-x-auto">
        <table className="w-full whitespace-nowrap">
          <thead>
            <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              <th className="px-10 py-5">วันที่</th>
              <th className="px-10 py-3">เลขที่เอกสาร</th>
              <th className="px-10 py-3">เลขที่สํญญา</th>
              <th className="px-10 py-3">#</th>
              <th className="px-10 py-3">รายการ</th>
              <th className="px-10 py-3">รหัส</th>
              <th className="px-10 py-3">หน่วยงาน</th>
              <th className="px-10 py-3">หมวด/กิจกรรม</th>
              <th className="px-10 py-3">รับ</th>
              <th className="px-10 py-3">รับคืนสัญญายืม</th>
              <th className="px-10 py-3">ถอนสัญญายืม</th>
              <th className="px-10 py-3">จ่าย</th>
              <th className="px-10 py-3">หมายเหตุ</th>
              <th className="px-10 py-3">คงเหลือ</th>
              <th className="px-10 py-3">ยอดรวมตามหน้า bookbang </th>
              <th className="px-10 py-3">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody className="bg-white">
  {registryData.map((entry) => (
    <tr key={entry.registry_id} className="text-gray-700 hover:bg-gray-100">
      <td className="px-4 py-3 border">{entry.date}</td>
      <td className="px-4 py-3 border">{entry.document_id}</td>
      <td className="px-4 py-3 border">{entry.contract_number}</td>
      <td className="px-4 py-3 border">-</td>
      <td className="px-4 py-3 border">{entry.item}</td>
      <td className="px-4 py-3 border">{entry.code}</td>
      <td className="px-4 py-3 border">{entry.department}</td>
      <td className="px-4 py-3 border">{entry.activity_project}</td>
      <td className="px-4 py-3 border">{entry.bank_deposit_book}</td>
      <td className="px-4 py-3 border">{entry.received}</td>
      <td className="px-4 py-3 border">{entry.loan_returned}</td>
      <td className="px-4 py-3 border">{entry.withdrawal}</td>
      <td className="px-4 py-3 border">{entry.expense}</td>
      <td className="px-4 py-3 border">{entry.balance}</td>
      <td className="px-4 py-3 border">{entry.total_from_bookbang}</td>
      <td className="px-4 py-3 border">{entry.note}</td>
    </tr>
  ))}
</tbody>

        </table>
      </div>
    </div>
  </section>
  );
}
