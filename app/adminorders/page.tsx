"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loading from "@/public/Anim/load_white_paths.json";

import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import fbApp from "@/app/fb/firebaseInit";

import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

interface dev {
  did: string;
  id: number;
  mobileNumber: number;
  nameData: string;
  Requirement: string;
  email: string;
  Country: string;
}

export default function Orders(attr: any) {
  let [devLoad, setDevLoad] = useState(false);
  let [orders, setorders] = useState<dev[]>([]);
  let [loadShow, setLoadShow] = useState("block");
  let showLoad = () => {
    setLoadShow("block");
  };
  let hideLoad = () => {
    setLoadShow("hidden");
  };

  async function getorders(): Promise<dev[]> {
    try {
      const OrdersCollection = collection(fbApp, "orders");
      const querySnapshot = await getDocs(OrdersCollection);
      let counter = 0;
      const ordersArray: dev[] = querySnapshot.docs
        .map((doc) => {
          // Extracting the document data

          const data = doc.data() as {
            nameData: string;
            Requirement: string;
            email: string;

            Country: string;
            mobileNumber: number;
          };

          // Conditional assignment based on the document ID
          if (doc.id === "WQikks9JVOr66nWzbzXM") {
            console.log("TEST DATA IDENTIFIED");
            return null;
          } else {
            counter++;
            return {
              did: doc.id,
              id: counter,
              ...data,
            };
          }
        })
        .filter((order) => order !== null);
      console.log(`Orders fetched successfully- ${ordersArray}`);
      hideLoad();
      return ordersArray; // Returns the array of developers
    } catch (e) {
      console.error("Error fetching orders: ", e);
      return []; // Return an empty array in case of error
    }
  }

  async function deleteOrder(orderId: string) {
    try {
      showLoad();
      const orderDoc = doc(fbApp, "orders", orderId);
      await deleteDoc(orderDoc);
      hideLoad();
      await handleDevs();
      console.log("Order deleted successfully");
    } catch (e) {
      console.error("Error deleting order: ", e);
    }
  }

  async function handleDevs() {
    let devs: dev[] = await getorders();
    setorders(devs);
    setDevLoad(true);
    attr.changeLoad();
  }

  useEffect(() => {
    handleDevs();
  }, []);

  return (
    <div>
      <div
        className={`${loadShow} z-[100] fixed inset-0 mx-auto my-auto rounded-lg bg-orngclr flex justify-center items-center w-[80px] h-[70px]`}
      >
        <Lottie animationData={loading} className="z-40" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-orngclr">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Mobile Number
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Requirement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-[#ffff]">
                  {order.id}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.nameData}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.mobileNumber}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.Requirement}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.Country}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => deleteOrder(order.did)}
                    className="bg-[rgb(49,165,49)] text-[rgb(6,58,6)] px-4 py-2 rounded"
                  >
                    Erase
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
