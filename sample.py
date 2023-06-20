arr=[1,3,5,7,12,23,32,45,55]
def sort(k,st,ep,arr):
    print("1")
    if st > ep:
        print("2")
        mid=(st+ep)//2
        print("3")
        if k==arr[mid]:
            return mid
        elif k>arr[mid]:
            return sort(k,mid+1,ep,arr)
        else:
            return sort(k,st,mid,arr)
    else:
        return None
print(len(arr))
v=sort(7,0,len(arr),arr)
print("element is at:",v)